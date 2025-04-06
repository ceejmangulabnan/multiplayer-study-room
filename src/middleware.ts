// middleware.ts (at root level)
import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/app/utils/supabase/middleware'
import { createClient } from '@/app/utils/supabase/server'

export async function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname

  // Allow access to root and login page without authentication
  if (path === '/' || path.startsWith('/login')) {
    return NextResponse.next()
  }

  // First update the session
  const response = await updateSession(request)

  // Create Supabase client
  const supabase = await createClient()

  // Check if user is authenticated
  const { data: { user } } = await supabase.auth.getUser()

  // If no user, redirect to login
  if (!user) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Otherwise, return the updated session response
  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
