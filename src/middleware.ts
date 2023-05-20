import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const user = JSON.parse(request.cookies.get('user')?.value as any)

  const redirectURL = new URL('/', request.url)

  if (!user?.isAuthenticated) {
    return NextResponse.redirect(redirectURL, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; path=/; httpOnly; max-age=60`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/dashboard',
}
