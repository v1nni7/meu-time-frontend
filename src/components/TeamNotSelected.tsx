import Link from 'next/link'

export default function TeamNotSelected() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="mb-4 w-96 text-center text-2xl leading-tight">
          Você ainda não selecionou um time para acompanhar! Selecione um país
          para começar.
        </p>

        <Link
          href="/dashboard/select-country"
          className="rounded-lg bg-green-500 p-2 font-alt hover:bg-green-600"
        >
          Selecionar país
        </Link>
      </div>
    </div>
  )
}