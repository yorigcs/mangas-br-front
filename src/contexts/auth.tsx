/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useContext, createContext, useState, useEffect } from 'react'
import { User } from '../models/userModel'
import api from '../services/api'

interface Props {
  children: React.ReactNode
}

interface AuthContextData {
  user: User | null
  signed: boolean
  signIn: (user: User, token: string) => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storagedUser = localStorage.getItem('User')
    const storagedToken = localStorage.getItem('Token')
    console.log(storagedToken)
    if (storagedUser && storagedToken) {
      setUser(JSON.parse(storagedUser))
      api.defaults.headers.common['x-acess-token'] = `Bearer ${storagedToken}`
    }
  }, [])

  const signOut = (): void => {
    localStorage.removeItem('User')
    localStorage.removeItem('Token')
    setUser(null)
  }

  const signIn = (user: User, token: string): void => {
    localStorage.setItem('User', JSON.stringify(user))
    localStorage.setItem('Token', token)
    setUser(user)
    api.defaults.headers.common['x-acess-token'] = `Bearer ${token}`
  }

  return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
  )
}

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)
  return context
}
