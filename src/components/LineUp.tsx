import { ClipboardSignature } from 'lucide-react'

interface LineUpProps {
  lineups:
    | {
        formation: string
        played: number
      }[]
    | undefined
}

export default function LineUp({ lineups }: LineUpProps) {
  return (
    <div className="flex flex-col justify-start gap-4">
      <h2 className="flex items-center font-alt text-xl">
        <ClipboardSignature className="mr-2" size={28} /> Formação
      </h2>

      <div className="grid grid-cols-3 gap-2 rounded-lg bg-neutral-200 p-2 shadow">
        {lineups
          ? lineups.map((lineup, index) => (
              <div
                key={index}
                className="mb-2 flex flex-col items-center rounded-lg border-2 border-neutral-300 p-1"
              >
                <h3 className="font-alt">Formação: {lineup.formation}</h3>
                <span>Jogados: {lineup.played}</span>
              </div>
            ))
          : 'Nenhuma formação encontrada'}
      </div>
    </div>
  )
}
