import TeamNotSelected from '@/components/TeamNotSelected'
import { cookies } from 'next/headers'

export default function Dashboard() {
  const isTeamSelected = cookies().has('team')

  return (
    <div className="h-full w-full">
      {isTeamSelected ? 'Time seleciona' : <TeamNotSelected />}
    </div>
  )
}
