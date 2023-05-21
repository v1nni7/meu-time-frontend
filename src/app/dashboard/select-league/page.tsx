'use client'

import { useCallback, useEffect, useState } from 'react'
import { CalendarDays, Shield } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { api } from '@/lib/api'
import { useSearchParams } from 'next/navigation'

interface Leagues {
  league: {
    id: number
    name: string
    type: string
    logo: string
  }
  country: {
    name: string
    code: string
    flag: string
  }
  seasons: {
    year: number
    start: string
    end: string
    current: boolean
    coverage: {
      fixtures: {
        events: boolean
        lineups: boolean
        statistics_fixtures: boolean
        statistics_players: boolean
      }
      standings: boolean
      players: boolean
      top_scorers: boolean
      top_assists: boolean
      top_cards: boolean
      injuries: boolean
      predictions: boolean
      odds: boolean
    }
  }[]
}

export default function SelectLeague() {
  const countryCode = useSearchParams().get('country_code')

  const [selected, setSelected] = useState<number | null>(null)
  const [search, setSearch] = useState<string | null>(null)
  const [leagues, setLeagues] = useState<Leagues[]>([])

  const filtered = search
    ? leagues.filter(({ league }) =>
        league.name.toLowerCase().includes(search.toLowerCase()),
      )
    : leagues

  const selectLeagueSeasons = selected
    ? leagues.find(({ league }) => league.id === selected)?.seasons
    : null

  const handleLoadingLeagues = useCallback(async () => {
    try {
      const { data } = await api.get('/leagues', {
        params: {
          code: countryCode,
        },
      })

      if (data.response.length === 0) {
        throw new Error('Error loading leagues')
      }

      setLeagues(data.response)
    } catch (error) {
      console.log(error)
    }
  }, [countryCode])

  useEffect(() => {
    handleLoadingLeagues()
  }, [handleLoadingLeagues])

  return (
    <div className="h-full space-y-4 py-4">
      <h2 className="flex items-center font-alt text-3xl">
        <Shield className="mr-2" size={36} /> Ligas
      </h2>

      <input
        type="text"
        placeholder="Pesquise a liga"
        onChange={(event) => setSearch(event.target.value)}
        className="w-full rounded-lg border-2 border-transparent bg-gray-200 p-3 text-xl outline-none transition-colors focus:border-green-600"
      />

      <ul className="grid grid-cols-6 gap-4">
        {filtered.map(({ league }, index) => (
          <li key={index}>
            <button
              onClick={() => setSelected(league.id)}
              className="flex flex-col items-center justify-center rounded-lg border-2 border-transparent bg-gray-300 p-2 hover:border-green-500"
            >
              <Image width={64} height={64} src={league.logo} alt="" />

              <p className="mt-2 font-alt text-xl leading-none">
                {league.name}
              </p>
            </button>
          </li>
        ))}
      </ul>

      {selected && (
        <>
          <h2 className="flex items-center font-alt text-3xl">
            <CalendarDays className="mr-2" /> Temporadas
          </h2>

          <ul className="grid grid-cols-10 gap-4">
            {selectLeagueSeasons?.map(({ year }) => (
              <li key={year}>
                <Link
                  href={`/dashboard/select-team?country_code=${selected}&season=${year}`}
                  className="inline-block w-full rounded-lg bg-gray-400 p-2 text-center font-alt hover:bg-gray-500/50"
                >
                  {year}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
