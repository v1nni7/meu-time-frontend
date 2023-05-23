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
        <div className="container mx-auto flex h-screen">
          <div className="my-12 flex w-full rounded-lg md:bg-neutral-100 md:shadow ">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
