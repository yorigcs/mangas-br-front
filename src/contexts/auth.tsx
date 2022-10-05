/* eslint-disable @typescript-eslint/consistent-type-assertions */
import React, { useContext, createContext, useState } from 'react'
import { User } from '../models/user-model'

interface Props {
  children: React.ReactNode
}

interface AuthContextData {
  user: User | null
  signed: boolean
  signIn: (user: User) => void
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider = ({ children }: Props): JSX.Element => {
  const [user, setUser] = useState<User | null>(null)

  const signIn = (user: User): void => {
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
