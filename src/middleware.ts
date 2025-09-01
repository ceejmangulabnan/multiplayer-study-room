import { type NextRequest, NextResponse } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'
import { createClient } from '@/utils/supabase/server'

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // First update the session
  const response = await updateSession(request)
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  // Allow access to root and login page without authentication
  if (path === '/' || path.startsWith('/auth/callback')) {
    return NextResponse.next()
  }

  // If no user, and path is neither login or home then redirect to login
  if (!user && !(path.startsWith('/login') || path === "/")) {
    console.log("No user found, redirecting to login")
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // If user attempts to visit login page when already authed, redirect them to user dashboard page
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
