import { PropsWithChildren } from 'react'
import Sidebar from '@/components/Sidebar'
import { TeamProvider } from '@/context/TeamContext'

export default function StatisticsLayout({ children }: PropsWithChildren) {
  return (
    <div className="grid w-full grid-cols-[300px_minmax(300px,_1fr)_0]">
      <Sidebar />

      <TeamProvider>
        <div className="grid grid-rows-[64px_minmax(40px,_1fr)_0] overflow-hidden p-2">
          {children}
        </div>
      </TeamProvider>
    </div>
  )
}
