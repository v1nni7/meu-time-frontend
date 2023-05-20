import { api } from '@/lib/api'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const redirectTo = request.cookies.get('redirectTo')?.value

  const redirectURL = redirectTo ?? new URL('/', request.url)

  try {
    const { searchParams } = new URL(request.url)

    const accessToken = searchParams.get('access_token')

    if (!accessToken) {
      return NextResponse.redirect(redirectURL)
    }

    const { data } = await api.get('/status', {
      headers: {
        'x-rapidapi-key': accessToken,
      },
    })

    const subscriptionActive = data.response.subscription.active

    if (subscriptionActive !== true) {
      return NextResponse.redirect(redirectURL)
    }

    const user = JSON.stringify({
      isAuthenticated: true,
      ...data.response.account,
    })

    const cookieExpiresInSeconds = 60 * 60 * 24 * 30

    return NextResponse.redirect(`${redirectURL}/dashboard`, {
      headers: {
        'Set-Cookie': `user=${user}; Path=/; max-age=${cookieExpiresInSeconds}`,
      },
    })
  } catch (error) {
    return NextResponse.redirect(redirectURL)
  }
}
