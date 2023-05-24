'use client'

import Link from 'next/link'
import { useCallback, useContext, useEffect, useState } from 'react'
import LineUp from '@/components/LineUp'
import { TeamContext } from '@/context/TeamContext'
import { Statistics } from '@/types/apiFootballTypes'
import { api } from '@/lib/api'
import ResultTable from '@/components/ResultTable'
import { GoalMinutesChart } from '@/components/GoalMinutesChart'

export default function StatisticsPage() {
  const { selectedOptions } = useContext(TeamContext)
  const [statistics, setStatistics] = useState<Statistics | null>(null)

  console.log(statistics)

  const loadingTeamStatistics = useCallback(async () => {
    try {
      const { data } = await api.get('/teams/statistics', {
        params: {
          team: selectedOptions.team,
          league: selectedOptions.league,
          season: selectedOptions.season,
        },
      })

      console.log(data)

      if (Object.keys(data.response).length === 0) {
        return
      }

      setStatistics(data.response)
    } catch (error) {
      console.log(error)
    }
  }, [selectedOptions.season, selectedOptions.team, selectedOptions.league])

  const lineUps = statistics?.lineups
  const fixtures = statistics?.fixtures
  const goalMinutes = statistics?.goals.for.minute

  useEffect(() => {
    loadingTeamStatistics()
  }, [loadingTeamStatistics])

  return (
    <>
      {!statistics ? (
        <>
          <h1 className="text-center font-alt text-xl">
            Você ainda não selecionou o seu time!
          </h1>
          <div className="flex h-full items-center justify-center">
            <Link
              href="/statistics/countries"
              className="inline-block rounded-lg bg-green-600 p-2 font-alt text-white outline-none transition hover:bg-green-700 focus:bg-green-700"
            >
              Selecionar time
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center">
            <Link
              href="/statistics/countries"
              className="inline-block rounded-lg bg-green-600 p-2 font-alt text-white outline-none transition hover:bg-green-700 focus:bg-green-700"
            >
              Selecionar outro país
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <ResultTable fixtures={fixtures} />
              <GoalMinutesChart goalMinutes={goalMinutes} />
            </div>
            <LineUp lineups={lineUps} />
          </div>
        </>
      )}
    </>
  )
}
