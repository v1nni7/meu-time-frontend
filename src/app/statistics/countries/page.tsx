'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Globe2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { Country } from '@/types/apiFootballTypes'
import BackButton from '@/components/BackButton'
import Loading from '@/components/Loading'

export default function Countries() {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState<Country[] | null>(null)

  const filtered =
    search.length > 0
      ? countries?.filter((country) =>
          country.name.toLowerCase().includes(search.toLowerCase()),
        )
      : countries

  const loadingCountries = async () => {
    try {
      const { data } = await api.get('/countries')

      console.log(data)

      if (data.response.length === 0) {
        return
      }

      setCountries(data.response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    loadingCountries()
  }, [])

  return (
    <>
      <BackButton />

      <div className="flex flex-col gap-4">
        <h2 className="flex items-center font-alt text-2xl">
          <Globe2 className="mr-2" size={36} /> Países
        </h2>

        <input
          type="text"
          placeholder="Pesquise um país"
          onChange={(event) => setSearch(event.target.value)}
          className="rounded-lg border-2 border-gray-200 p-3 text-xl outline-none transition-colors focus:border-green-600"
        />

        {!countries ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-6 gap-4 overflow-y-scroll">
            {filtered?.map((country, index) => (
              <Link
                href={`/statistics/leagues?country=${country.code}`}
                key={index}
                className="flex flex-col items-center gap-4 rounded-lg bg-gray-300 p-4 transition-colors hover:bg-gray-400"
              >
                {country.flag && (
                  <Image
                    width={64}
                    height={64}
                    alt=""
                    src={country.flag}
                    className=""
                  />
                )}

                <h2 className="text-center font-alt">{country.name}</h2>
              </Link>
            ))}
          </div>
        )}
      </div>
    </>
  )
}
