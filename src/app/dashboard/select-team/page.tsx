'use client'

import { useCallback, useEffect, useState } from 'react'
import { Milestone } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { api } from '@/lib/api'
import { useSearchParams } from 'next/navigation'

interface Team {
  team: {
    id: number
    name: string
    code: string
    country: string
    founded: number
    national: boolean
    logo: string
  }
  venue: {
    id: number
    name: string
    address: string
    city: string
    capacity: number
    surface: string
    image: string
  }
}

export default function SelectLeague() {
  const season = useSearchParams().get('season')
  const league = useSearchParams().get('league_id')

  const [search, setSearch] = useState<string | null>(null)
  const [teams, setTeams] = useState<Team[]>([])

  const filtered = search
    ? teams.filter(({ team }) =>
        team.name.toLowerCase().includes(search.toLowerCase()),
      )
    : teams

  const handleLoadingTeams = useCallback(async () => {
    try {
      const { data } = await api.get('/teams', {
        params: {
          season,
          league,
        },
      })

      if (data.response.length === 0) {
        throw new Error('Error loading teams')
      }

      setTeams(data.response)
    } catch (error) {
      console.log(error)
    }
  }, [season, league])

  useEffect(() => {
    handleLoadingTeams()
  }, [handleLoadingTeams])

  return (
    <div className="h-full space-y-4 py-4">
      <h2 className="flex items-center font-alt text-3xl">
        <Milestone className="mr-2" size={36} /> Times
      </h2>

      <input
        type="text"
        placeholder="Pesquise o time"
        onChange={(event) => setSearch(event.target.value)}
        className="w-full rounded-lg border-2 border-transparent bg-gray-200 p-3 text-xl outline-none transition-colors focus:border-green-600"
      />

      <ul className="grid grid-cols-6 gap-4">
        {filtered.map(({ team }, index) => (
          <li key={index}>
            <Link
              href={`/dashboard/team?team_code=${team.id}&league=${league}&season=${season}`}
              className="flex flex-col items-center justify-center rounded-lg border-2 border-transparent bg-gray-300 p-2 text-center transition hover:border-green-500"
            >
              <Image width={64} height={64} src={team.logo} alt="" />

              <p className="mt-2 font-alt text-xl leading-none">{team.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
