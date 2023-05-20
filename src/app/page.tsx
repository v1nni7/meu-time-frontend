'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [accessToken, setAccessToken] = useState<string>('')

  return (
    <main className="col-span-6 flex flex-col items-center justify-center">
      <div className="w-96 rounded-lg bg-gray-300/50 p-3">
        <h2 className="mb-3 text-center font-alt text-3xl">Entrar</h2>

        <input
          type="text"
          placeholder="Token de acesso"
          onChange={(event) => setAccessToken(event.target.value)}
          className="mb-3 w-full rounded-lg p-3 text-lg shadow outline-none focus:ring-2 focus:ring-green-500"
        />

        <Link
          prefetch={false}
          href={`/api/auth/signin?access_token=${accessToken}`}
          className="inline-block w-full rounded-lg bg-green-500 p-3 text-center font-alt text-xl outline-none transition-colors hover:bg-green-600 focus:bg-green-600"
        >
          Enviar
        </Link>

        <div className="mt-4 flex flex-col items-center justify-center">
          <p>Não possui uma conta?</p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://dashboard.api-football.com/register"
            className="text-green-700 outline-none hover:underline focus:underline"
          >
            Crie sua conta
          </a>
        </div>
      </div>
    </main>
  )
}
