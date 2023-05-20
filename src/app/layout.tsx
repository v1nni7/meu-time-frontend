import { ReactNode } from 'react'
import './globals.css'
import {
  Roboto_Flex as Roboto,
  Bai_Jamjuree as BaiJamjuree,
} from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Meu time',
  description: 'Veja informações sobre seu time do coração',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans`}>
        <div className="flex h-screen items-center justify-center">
          <div className="h-5/6 w-5/6 overflow-hidden rounded-lg bg-neutral-100 shadow-lg">
            <div className="grid h-full grid-cols-6">{children}</div>
          </div>
        </div>
      </body>
    </html>
  )
}
