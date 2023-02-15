import React, { createContext, useState } from 'react'
import { AuthContextData, AuthData } from '../types'

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>()
  const loading = false // fix

  const signIn = async ({ username, password }: AuthData) => {
    const user = { username: username, password: password }

    // set the data in the context so the app can be notified
    // send the user to the AuthStack
    setAuthData(user)
  }

  const signOut = async () => {
    // remove data from context
    setAuthData(undefined)
  }

  return (
    // this component will be used to encapsulate the whole app
    // all components will have access to the Context
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
