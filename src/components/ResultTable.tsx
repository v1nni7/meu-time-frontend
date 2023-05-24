import { Table2 } from 'lucide-react'

interface FixturesProps {
  fixtures:
    | {
        played: {
          home: number
          away: number
          total: number
        }
        wins: {
          home: number
          away: number
          total: number
        }
        draws: {
          home: number
          away: number
          total: number
        }
        loses: {
          home: number
          away: number
          total: number
        }
      }
    | undefined
}

export default function ResultTable({ fixtures }: FixturesProps) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="flex items-center font-alt text-xl">
        <Table2 className="mr-2" size={28} /> Resultado
      </h2>

      <table className="overflow-hidden rounded-lg bg-neutral-200 shadow">
        <thead className="rounded-t-lg bg-neutral-400">
          <tr>
            <th className="p-2 text-center"></th>
            <th className="p-2 text-center">Casa</th>
            <th className="p-2 text-center">Fora</th>
            <th className="p-2 text-center">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t-2 border-neutral-300 bg-neutral-300">
            <td className="p-2 text-center font-alt">Jogados</td>
            <td className="p-2 text-center font-alt">
              {fixtures?.played.home}
            </td>
            <td className="p-2 text-center font-alt">
              {fixtures?.played.away}
            </td>
            <td className="p-2 text-center font-alt">
              {fixtures?.played.total}
            </td>
          </tr>
          <tr className="border-t-2 border-neutral-300">
            <td className="p-2 text-center font-alt">Vitórias</td>
            <td className="p-2 text-center font-alt">{fixtures?.wins.home}</td>
            <td className="p-2 text-center font-alt">{fixtures?.wins.away}</td>
            <td className="p-2 text-center font-alt">{fixtures?.wins.total}</td>
          </tr>
          <tr className="border-t-2 border-neutral-300 bg-neutral-300">
            <td className="p-2 text-center font-alt">Empates</td>
            <td className="p-2 text-center font-alt">{fixtures?.draws.home}</td>
            <td className="p-2 text-center font-alt">{fixtures?.draws.away}</td>
            <td className="p-2 text-center font-alt">
              {fixtures?.draws.total}
            </td>
          </tr>
          <tr className="border-t-2 border-neutral-300">
            <td className="p-2 text-center font-alt">Derrotas</td>
            <td className="p-2 text-center font-alt">{fixtures?.loses.home}</td>
            <td className="p-2 text-center font-alt">{fixtures?.loses.away}</td>
            <td className="p-2 text-center font-alt">
              {fixtures?.loses.total}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
