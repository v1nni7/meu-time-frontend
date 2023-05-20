'use client'

import { ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowBigLeft } from 'lucide-react'
import Sidebar from '@/components/Sidebar'

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const router = useRouter()

  return (
    <>
      <Sidebar />
      <div className="col-span-5 p-2">
        <button
          onClick={() => router.back()}
          className="flex items-center font-alt text-xl transition-colors hover:text-black/60"
        >
          <ArrowBigLeft />
          Voltar
        </button>

        {children}
      </div>
    </>
  )
}
