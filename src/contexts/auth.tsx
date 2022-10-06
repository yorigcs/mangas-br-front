/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useContext, createContext, useState, useEffect } from 'react'
import { User } from '../models/userModel'

interface Props {
  children: React.ReactNode
}

interface AuthContextData {
  user: User | null
  signed: boolean
  signIn: (user: User, token: string) => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storagedUser = localStorage.getItem('User')
    if (storagedUser) {
      setUser(JSON.parse(storagedUser))
    }
  }, [])

  const signIn = (user: User, token: string): void => {
    localStorage.setItem('User', JSON.stringify(user))
    localStorage.setItem('Token', token)
    setUser(user)
  }

  return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn }}>
            {children}
        </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)
  return context
}
