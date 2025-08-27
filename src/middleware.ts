// middleware.ts (at root level)
import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { createClient } from '@/utils/supabase/server'

export async function middleware(request: NextRequest) {
  // Get the pathname
  const path = request.nextUrl.pathname

  // First update the session
  const response = await updateSession(request)

  // Create Supabase client
  const supabase = await createClient()

  // Check if user is authenticated
  const { data: { user } } = await supabase.auth.getUser()

  // Allow access to root and login page without authentication
  // if (path === '/' || path.startsWith('/auth/callback') || path === '/login') {
  //   return NextResponse.next()
  // }

  // If no user, redirect to login
  if (!user) {
    console.log("No user found, redirecting to login")
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (user && path.startsWith('/login')) {
    console.log("User found, redirecting to dashboard")
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  // Otherwise, return the updated session response
  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
