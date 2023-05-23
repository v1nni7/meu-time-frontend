import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value
  const redirectURL = new URL('/', request.url)

  if (!token) {
    return NextResponse.redirect(redirectURL, {
      headers: {
        'Set-Cookie': `redirectTo=${request.url}; path=/; httpOnly; max-age=60`,
      },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/statistics/:path*',
}
