import { Users2 } from 'lucide-react'
import PlayersList from '@/components/PlayersList'
import BackButton from '@/components/BackButton'

export default function Players() {
  return (
    <>
      <BackButton />

      <div className="flex h-full flex-col gap-4 overflow-hidden">
        <h2 className="flex font-alt text-xl">
          <Users2 className="mr-2" size={28} /> Jogadores
        </h2>

        <PlayersList />
      </div>
    </>
  )
}
