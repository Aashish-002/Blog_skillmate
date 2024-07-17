import React, { ReactNode } from 'react'
import { createContext } from 'vm'

type ThemeType = {
    theme: "light" | "dark"
    setTheme: () => void
}

export const ThemeContext = createContext()


type Props = {
    childern: ReactNode
}

export function ThemeContextProvider({childern}: Props) {
  return (
<></>
  )
}
