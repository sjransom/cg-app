import React, { createContext, useState } from 'react'
import { login } from '../api/login'
import { AuthContextData, AuthData, Login } from '../types'
import { storage, USER_TOKENS } from '../utils/mmkv'

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>()
  const [loginFail, setLoginFail] = useState<boolean>(false)
  const loading = false // fix

  const signIn = async ({ username, password }: Login) => {
    // login API POST request
    const data: AuthData | false = await login(username, password)

    // if API request fails then set loginFail true
    if (!data) {
      setLoginFail(true)
      return
    }

    // set the access and refresh tokens to local storage using MMKV
    // serialize the object into a JSON string
    storage.set(USER_TOKENS, JSON.stringify(data))

    // set the data in the context so the app can be notified
    // send the user to the AuthStack
    setLoginFail(false)
    setAuthData(data)
  }

  const signOut = async () => {
    // remove data from context
    setAuthData(undefined)
  }

  return (
    // this component will be used to encapsulate the whole app
    // all components will have access to the Context
    <AuthContext.Provider
      value={{ authData, loginFail, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
