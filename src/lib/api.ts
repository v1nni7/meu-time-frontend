import axios from 'axios'
import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

function getAPIClient(ctx?: GetServerSidePropsContext) {
  const instance = axios.create({
    baseURL: 'https://v3.football.api-sports.io',
  })

  instance.interceptors.request.use(async (config) => {
    const { token } = parseCookies()

    if (token) {
      config.headers['x-rapidapi-key'] = token
    }

    return config
  })

  return instance
}

export const api = getAPIClient()
