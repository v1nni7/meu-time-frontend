'use client'

import Image from 'next/image'
import { Flag } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useContext, useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { Team } from '@/types/apiFootballTypes'
import { TeamContext } from '@/context/TeamContext'
import BackButton from '@/components/BackButton'

export default function Teams() {
  const router = useRouter()
  const { setSelectedOptions } = useContext(TeamContext)

  const league = useSearchParams().get('league')
  const season = useSearchParams().get('season')
  const country = useSearchParams().get('country')

  const [search, setSearch] = useState('')
  const [teams, setTeams] = useState<Team[]>([])

  const filtered =
    search.length > 0
      ? teams.filter(({ team }) =>
          team.name.toLowerCase().includes(search.toLowerCase()),
        )
      : teams

  const loadingTeams = useCallback(async () => {
    try {
      const { data } = await api.get('/teams', {
        params: {
          league,
          season,
        },
      })

      console.log(data)

      if (data.response.length === 0) {
        return
      }

      setTeams(data.response)
    } catch (error) {
      console.log(error)
    }
  }, [season, league])

  const handleSelectTeam = useCallback(
    (team: number) => {
      if (!team || !season || !league || !country) {
        return
      }

      const teamId = team.toString()

      const selectedOptions = { league, season, country, team: teamId }

      localStorage.setItem('options', JSON.stringify(selectedOptions))
      setSelectedOptions(selectedOptions)

      router.push('/statistics')
    },
    [league, season, country, setSelectedOptions, router],
  )

  useEffect(() => {
    loadingTeams()
  }, [loadingTeams])

  return (
    <>
      <BackButton />
      <div className="flex flex-col gap-4">
        <h2 className="flex items-center font-alt text-2xl">
          <Flag className="mr-2" size={36} /> Times
        </h2>

        <input
          type="text"
          placeholder="Pesquise um país"
          onChange={(event) => setSearch(event.target.value)}
          className="rounded-lg border-2 border-gray-200 p-3 text-xl outline-none transition-colors focus:border-green-600"
        />

        <div className="grid grid-cols-6 gap-4 overflow-y-scroll">
          {filtered.map(({ team }, index) => (
            <button
              key={index}
              onClick={() => handleSelectTeam(team.id)}
              className="flex flex-col items-center gap-4 rounded-lg bg-gray-300 p-4 transition-colors hover:bg-gray-400"
            >
              {team.logo && (
                <Image
                  width={64}
                  height={64}
                  alt=""
                  src={team.logo}
                  className=""
                />
              )}

              <h2 className="text-center font-alt">{team.name}</h2>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
