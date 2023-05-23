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

    const cookieExpiresInSeconds = 60 * 60 * 24 * 30

    return NextResponse.redirect(`${redirectURL}/statistics`, {
      headers: {
        'Set-Cookie': `token=${accessToken}; Path=/; max-age=${cookieExpiresInSeconds}`,
      },
    })
  } catch (error) {
    return NextResponse.redirect(redirectURL)
  }
}
