'use client'

import { useContext } from 'react'
import { TeamContext } from '@/context/TeamContext'

export default function Statistics() {
  const { selectedOptions, setSelectedOptions } = useContext(TeamContext)

  return <h1>Estátisticas</h1>
}
