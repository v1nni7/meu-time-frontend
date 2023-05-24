'use client'

import Image from 'next/image'
import { useCallback, useContext, useEffect, useState } from 'react'
import { TeamContext } from '@/context/TeamContext'
import { api } from '@/lib/api'
import { Player } from '@/types/apiFootballTypes'
import PlayerCard from './PlayerCard'

export default function PlayersList() {
  const { selectedOptions } = useContext(TeamContext)
  const [players, setPlayers] = useState<Player[]>([])

  const loadingPlayers = useCallback(async () => {
    try {
      const { data } = await api.get('/players', {
        params: {
          team: selectedOptions.team,
          season: selectedOptions.season,
        },
      })

      if (data.response.length === 0) {
        return
      }

      setPlayers(data.response)
    } catch (error) {
      console.log(error)
    }
  }, [selectedOptions.team, selectedOptions.season])

  useEffect(() => {
    loadingPlayers()
  }, [loadingPlayers])

  return (
    <>
      <input
        type="text"
        placeholder="Pesquise o jogador"
        className="rounded-lg border-2 border-gray-200 p-3 text-xl outline-none transition-colors focus:border-green-600"
      />

      <div className="grid h-full grid-cols-4 gap-3 overflow-y-scroll">
        {players.map(({ player }, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 rounded-lg bg-neutral-200 p-2 text-center font-alt shadow"
          >
            {player.photo && (
              <Image
                width={200}
                height={200}
                alt={player.name}
                src={player.photo}
                className="h-48 w-48 rounded-lg object-cover"
              />
            )}

            <h3>{player.name}</h3>
            <h4>Idade: {player.age} anos</h4>
            <h5>Nacionalidade: {player.nationality}</h5>
          </div>
        ))}
      </div>
    </>
  )
}
