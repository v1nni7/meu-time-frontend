'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Shield } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { League } from '@/types/apiFootballTypes'
import { useSearchParams } from 'next/navigation'
import BackButton from '@/components/BackButton'

export default function Leagues() {
  const countryCode = useSearchParams().get('country')

  const [search, setSearch] = useState('')
  const [leagues, setLeagues] = useState<League[]>([])
  const [selectedLeague, setSelectedLeague] = useState<number | null>(null)

  const filtered =
    search.length > 0
      ? leagues.filter(({ league }) =>
          league.name.toLowerCase().includes(search.toLowerCase()),
        )
      : leagues

  const leagueSeasons = leagues.filter(
    ({ league }) => league.id === selectedLeague,
  )

  const loadingLeagues = useCallback(async () => {
    try {
      const { data } = await api.get('/leagues', {
        params: { code: countryCode },
      })

      console.log(data)

      if (data.response.length === 0) {
        return
      }

      setLeagues(data.response)
    } catch (error) {
      console.log(error)
    }
  }, [countryCode])

  useEffect(() => {
    loadingLeagues()
  }, [loadingLeagues])

  return (
    <>
      <BackButton />
      <div className="flex flex-col gap-4">
        <h2 className="flex items-center font-alt text-2xl">
          <Shield className="mr-2" size={36} /> Ligas
        </h2>

        {selectedLeague || selectedLeague === 0 ? (
          <>
            <div className="mt-6 flex flex-col items-start gap-6">
              <div className="flex w-full items-center justify-between">
                <h3 className="flex items-center font-alt text-xl">
                  <Calendar className="mr-2" size={32} /> Selecione a temporada
                </h3>

                <button
                  onClick={() => setSelectedLeague(null)}
                  className="font-alt text-gray-600 transition-colors hover:text-gray-400 focus:text-gray-400"
                >
                  Selecionar outra liga
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                {leagueSeasons[0].seasons.map((season, index) => (
                  <Link
                    key={index}
                    href={`/statistics/teams?country=${countryCode}&league=${selectedLeague}&season=${season.year}`}
                    className="gap-4 rounded-lg bg-gray-300 px-4 py-2 font-alt transition-colors hover:bg-gray-400"
                  >
                    {season.year}
                  </Link>
                ))}
              </div>
            </div>
          </>
        ) : (
          <>
            <input
              type="text"
              placeholder="Pesquise uma liga"
              onChange={(event) => setSearch(event.target.value)}
              className="rounded-lg border-2 border-gray-200 p-3 text-xl outline-none transition-colors focus:border-green-600"
            />

            <div className="grid grid-cols-6 gap-4 overflow-y-scroll">
              {filtered.map(({ league }, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedLeague(league.id)}
                  className="flex min-h-[160px] flex-col items-center justify-center gap-4 rounded-lg bg-gray-300 p-4 transition-colors hover:bg-gray-400"
                >
                  {league.logo && (
                    <Image
                      width={64}
                      height={64}
                      alt=""
                      src={league.logo}
                      className="h-16 w-16 object-contain"
                    />
                  )}

                  <h2 className="text-center font-alt">{league.name}</h2>
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  )
}
