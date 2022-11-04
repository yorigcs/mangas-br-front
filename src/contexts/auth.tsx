/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { createContext, useState, useEffect } from 'react'
import { User } from '../models/userModel'
import api from '../services/api'
import { SignInResponse } from '../services/requests'

interface Props {
  children: React.ReactNode
}

export interface AuthContextData {
  user: User | null
  signed: boolean
  signIn: (dataInfo: SignInResponse) => void
  signOut: () => void
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storagedUser = localStorage.getItem('User')
    const storagedToken = localStorage.getItem('Token')
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

  const signIn = (dataInfo: SignInResponse): void => {
    localStorage.setItem('User', JSON.stringify(dataInfo.user))
    localStorage.setItem('Token', dataInfo.token)
    setUser(dataInfo.user)
    api.defaults.headers.common['x-acess-token'] = `Bearer ${dataInfo.token}`
  }

  return (
        <AuthContext.Provider value={{ signed: !!user, user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
  )
}
