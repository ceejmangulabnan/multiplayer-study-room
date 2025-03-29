import { NextResponse } from 'next/server';
import { createClient } from '@/app/utils/supabase/server';

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');
  const next = searchParams.get('next') ?? '/';

  if (!code) {
    return NextResponse.redirect(`${origin}/auth/auth-code-error`);
  }

  const supabase = await createClient();

  // Exchange the code for a session
  const { error } = await supabase.auth.exchangeCodeForSession(code);
  if (error) {
    console.error("Session exchange error:", error);
    return NextResponse.redirect(`${origin}/auth/auth-code-error`);
  }

  // Retrieve the user from the session
  const { data: { user }, error: userError } = await supabase.auth.getUser();
  if (userError || !user) {
    console.error("Error fetching user after sign-in:", userError);
    return NextResponse.redirect(`${origin}/auth/auth-code-error`);
  }

  console.log("User Data:", user);

  // Check for additional user information in the database
  const { data: userData, error: userDataError } = await supabase
    .from('users')
    .select('username, status')
    .eq('gmail', user.email)
    .single();

  if (userDataError) {
    console.error("Error fetching user data:", userDataError);
  } else {
    console.log("User Data from Database:", userData);
  }

  // Handle local or production environments
  const forwardedHost = request.headers.get('x-forwarded-host');
  const isLocalEnv = process.env.NODE_ENV === 'development';

  if (isLocalEnv) {
    return NextResponse.redirect(`${origin}${next}`);
  } else if (forwardedHost) {
    return NextResponse.redirect(`https://${forwardedHost}${next}`);
  } else {
    return NextResponse.redirect(`${origin}${next}`);
  }
}
