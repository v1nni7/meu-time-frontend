'use client'

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
      <div className="">Selecionar outro país</div>

      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col gap-4">
          <ResultTable fixtures={fixtures} />
          <GoalMinutesChart goalMinutes={goalMinutes} />
        </div>
        <LineUp lineups={lineUps} />
      </div>
    </>
  )
}
