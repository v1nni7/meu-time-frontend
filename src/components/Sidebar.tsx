import { Users2 } from 'lucide-react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <div className="col-span-1 rounded-s-lg bg-gray-600">
      <h2 className="p-2 text-center font-alt text-3xl text-white">
        <span className="text-green-600">Meu</span>Time
      </h2>

      <ul className="flex flex-col gap-4 p-2">
        <li className="">
          <Link
            href="/statistics/players"
            className="flex items-center rounded-lg p-2 font-alt text-xl text-white hover:bg-gray-500"
          >
            <Users2 className="mr-2" /> Jogadores
          </Link>
        </li>
      </ul>
    </div>
  )
}
