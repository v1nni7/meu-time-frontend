'use client'

import { PropsWithChildren, createContext, useState } from 'react'

interface StateProps {
  country: string
  league: string
  season: string
  team: string
}

interface TeamContextProps {
  selectedOptions: StateProps
  setSelectedOptions: (data: StateProps) => void
}

export const TeamContext = createContext({} as TeamContextProps)

export function TeamProvider({ children }: PropsWithChildren) {
  const initialState = { country: '', league: '', season: '', team: '' }

  const [selectedOptions, setSelectedOptions] = useState(initialState)

  return (
    <TeamContext.Provider value={{ selectedOptions, setSelectedOptions }}>
      {children}
    </TeamContext.Provider>
  )
}
