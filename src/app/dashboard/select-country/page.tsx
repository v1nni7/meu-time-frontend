'use client'

import { useEffect, useState } from 'react'
import { Globe2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { api } from '@/lib/api'

interface Country {
  name: string
  code: string
  flag: string
}

export default function SelectCountry() {
  const [search, setSearch] = useState<string | null>(null)
  const [countries, setCountries] = useState<Country[]>([])

  const filtered = search
    ? countries.filter((country) =>
        country.name.toLowerCase().includes(search.toLowerCase()),
      )
    : countries

  const handleLoadingCountries = async () => {
    try {
      const { data } = await api.get('/countries')

      if (data.response.length === 0) {
        throw new Error('Error loading countries')
      }

      setCountries(data.response)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    handleLoadingCountries()
  }, [])

  return (
    <div className="h-full space-y-4 py-4">
      <h2 className="flex items-center font-alt text-3xl">
        <Globe2 className="mr-2" size={36} /> Países
      </h2>

      <input
        type="text"
        placeholder="Pesquise o país"
        onChange={(event) => setSearch(event.target.value)}
        className="w-full rounded-lg border-2 border-transparent bg-gray-200 p-3 text-xl outline-none transition-colors focus:border-green-600"
      />

      <ul className="grid grid-cols-6 gap-4">
        {filtered.map((country, index) => (
          <li key={index}>
            <Link
              href={`/dashboard/select-league?country_code=${country.code}`}
              className="flex h-32 flex-col items-center justify-center rounded-lg border-2 border-transparent bg-gray-300 p-2 transition hover:border-green-500"
            >
              <Image width={64} height={64} src={country.flag} alt="" />

              <p className="mt-2 font-alt text-xl leading-none">
                {country.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
