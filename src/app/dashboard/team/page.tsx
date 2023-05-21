'use client'

import { GoalMinutesChart } from '@/components/GoalMinutesChart'

export default function Team() {
  const goalMinutes = statistics.goals.for.minute
  const fixtures = statistics.fixtures

  return (
    <>
      <div className="grid grid-cols-2 gap-4">
        <div className="grid-span-1">
          <div className="mt-4 rounded-lg bg-neutral-200 p-2 shadow">
            <GoalMinutesChart goalMinutes={goalMinutes} />
          </div>
        </div>
        <div className="grid-span-1 gap-y-4">
          <div className="mt-4 rounded-lg bg-neutral-200 shadow">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="p-3"></th>
                  <th className="p-3">Casa</th>
                  <th className="p-3">Fora</th>
                  <th className="p-3">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="rounded-lg bg-neutral-100">
                  <td className="p-3" scope="col">
                    Jogados
                  </td>
                  <td className="p-3 text-center font-alt">
                    {fixtures.played.home}
                  </td>
                  <td className="p-3 text-center font-alt">
                    {fixtures.played.away}
                  </td>
                  <td className="p-3 text-center font-alt">
                    {fixtures.played.total}
                  </td>
                </tr>
                <tr>
                  <td className="p-3" scope="col">
                    Vencidos
                  </td>
                  <td className="p-3 text-center font-alt">
                    {fixtures.wins.home}
                  </td>
                  <td className="p-3 text-center font-alt">
                    {fixtures.wins.away}
                  </td>
                  <td className="p-3 text-center font-alt">
                    {fixtures.wins.total}
                  </td>
                </tr>
                <tr className="bg-neutral-100">
                  <td className="p-3" scope="col">
                    Perdidos
                  </td>
                  <td className="p-3 text-center font-alt">
                    {fixtures.loses.home}
                  </td>
                  <td className="p-3 text-center font-alt">
                    {fixtures.loses.away}
                  </td>
                  <td className="p-3 text-center font-alt">
                    {fixtures.loses.total}
                  </td>
                </tr>
                <tr>
                  <td className="p-2" scope="col">
                    Empatados
                  </td>
                  <td className="p-2 text-center font-alt">
                    {fixtures.draws.home}
                  </td>
                  <td className="p-2 text-center font-alt">
                    {fixtures.draws.away}
                  </td>
                  <td className="p-2 text-center font-alt">
                    {fixtures.draws.total}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-red p-2"></div>
        </div>
      </div>
    </>
  )
}

const statistics = {
  league: {
    id: 39,
    name: 'Premier League',
    country: 'England',
    logo: 'https://media.api-sports.io/football/leagues/39.png',
    flag: 'https://media.api-sports.io/flags/gb.svg',
    season: 2019,
  },
  team: {
    id: 33,
    name: 'Manchester United',
    logo: 'https://media.api-sports.io/football/teams/33.png',
  },
  form: 'WDLDWLDLDWLWDDWWDLWWLWLLDWWDWDWWWWDWDW',
  fixtures: {
    played: {
      home: 19,
      away: 19,
      total: 38,
    },
    wins: {
      home: 10,
      away: 8,
      total: 18,
    },
    draws: {
      home: 7,
      away: 5,
      total: 12,
    },
    loses: {
      home: 2,
      away: 6,
      total: 8,
    },
  },
  goals: {
    for: {
      total: {
        home: 40,
        away: 26,
        total: 66,
      },
      average: {
        home: '2.1',
        away: '1.4',
        total: '1.7',
      },
      minute: {
        '0-15': {
          total: 4,
          percentage: '6.06%',
        },
        '16-30': {
          total: 17,
          percentage: '25.76%',
        },
        '31-45': {
          total: 11,
          percentage: '16.67%',
        },
        '46-60': {
          total: 13,
          percentage: '19.70%',
        },
        '61-75': {
          total: 10,
          percentage: '15.15%',
        },
        '76-90': {
          total: 8,
          percentage: '12.12%',
        },
        '91-105': {
          total: 3,
          percentage: '4.55%',
        },
        '106-120': {
          total: null,
          percentage: null,
        },
      },
    },
    against: {
      total: {
        home: 17,
        away: 19,
        total: 36,
      },
      average: {
        home: '0.9',
        away: '1.0',
        total: '0.9',
      },
      minute: {
        '0-15': {
          total: 6,
          percentage: '16.67%',
        },
        '16-30': {
          total: 3,
          percentage: '8.33%',
        },
        '31-45': {
          total: 7,
          percentage: '19.44%',
        },
        '46-60': {
          total: 9,
          percentage: '25.00%',
        },
        '61-75': {
          total: 3,
          percentage: '8.33%',
        },
        '76-90': {
          total: 5,
          percentage: '13.89%',
        },
        '91-105': {
          total: 3,
          percentage: '8.33%',
        },
        '106-120': {
          total: null,
          percentage: null,
        },
      },
    },
  },
  biggest: {
    streak: {
      wins: 4,
      draws: 2,
      loses: 2,
    },
    wins: {
      home: '4-0',
      away: '0-3',
    },
    loses: {
      home: '0-2',
      away: '2-0',
    },
    goals: {
      for: {
        home: 5,
        away: 3,
      },
      against: {
        home: 2,
        away: 3,
      },
    },
  },
  clean_sheet: {
    home: 7,
    away: 6,
    total: 13,
  },
  failed_to_score: {
    home: 2,
    away: 6,
    total: 8,
  },
  penalty: {
    scored: {
      total: 10,
      percentage: '100.00%',
    },
    missed: {
      total: 0,
      percentage: '0%',
    },
    total: 10,
  },
  lineups: [
    {
      formation: '4-2-3-1',
      played: 32,
    },
    {
      formation: '3-4-1-2',
      played: 4,
    },
    {
      formation: '3-4-2-1',
      played: 1,
    },
    {
      formation: '4-3-1-2',
      played: 1,
    },
  ],
  cards: {
    yellow: {
      '0-15': {
        total: 5,
        percentage: '6.85%',
      },
      '16-30': {
        total: 5,
        percentage: '6.85%',
      },
      '31-45': {
        total: 16,
        percentage: '21.92%',
      },
      '46-60': {
        total: 12,
        percentage: '16.44%',
      },
      '61-75': {
        total: 14,
        percentage: '19.18%',
      },
      '76-90': {
        total: 21,
        percentage: '28.77%',
      },
      '91-105': {
        total: null,
        percentage: null,
      },
      '106-120': {
        total: null,
        percentage: null,
      },
    },
    red: {
      '0-15': {
        total: null,
        percentage: null,
      },
      '16-30': {
        total: null,
        percentage: null,
      },
      '31-45': {
        total: null,
        percentage: null,
      },
      '46-60': {
        total: null,
        percentage: null,
      },
      '61-75': {
        total: null,
        percentage: null,
      },
      '76-90': {
        total: null,
        percentage: null,
      },
      '91-105': {
        total: null,
        percentage: null,
      },
      '106-120': {
        total: null,
        percentage: null,
      },
    },
  },
}
