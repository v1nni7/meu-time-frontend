import { api } from '@/lib/api'

export const getCountriesRequest = async () => {
  return await api.get('/countries')
}
