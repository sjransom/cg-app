import React, { createContext, useEffect, useState } from 'react'
import Config from 'react-native-config'
import { fetchData } from '../api/fetchData'
import { login } from '../api/login'
import { logout } from '../api/logout'
import { AuthContextData, AuthData, LoginParams, UserData } from '../types'
import { storage, USER_TOKENS } from '../utils/mmkv'

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [authData, setAuthData] = useState<AuthData>()
  const [userData, setUserData] = useState<UserData>()
  const [loginFail, setLoginFail] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  // API request to users endpoints
  const fetchUsers = async () => {
    try {
      const data: UserData = await fetchData(`${Config.API_URL}/users`)
      setUserData(data)
    } catch (e) {
      console.log(e, 'unable to get user data')
    }
  }

  useEffect(() => {
    // check internal storage for access/refresh tokens
    if (storage.contains(USER_TOKENS)) {
      const tokens = storage.getString(USER_TOKENS)
      const tokensObject = tokens && JSON.parse(tokens)
      setAuthData(tokensObject)

      // fetch user data
      const userFetch = async () => await fetchUsers()
      userFetch()
    }
  }, [])

  const signIn = async ({ username, password }: LoginParams) => {
    setLoading(true)

    // login API POST request
    const tokens: AuthData | false = await login(username, password)

    // if API request fails then set loginFail true
    if (!tokens) {
      setLoginFail(true)
      return
    }

    // set the access and refresh tokens to local storage using MMKV
    // serialize the object into a JSON string
    storage.set(USER_TOKENS, JSON.stringify(tokens))

    // set the data in the context so the app can be notified
    // send the user to the AuthStack
    setAuthData(tokens)

    // fetch user info
    await fetchUsers()

    // set loading and fail flags to false
    setLoginFail(false)
    setLoading(false)
  }

  const signOut = async () => {
    // logout API call to delete current refreshToken
    await logout()
    // remove data from context
    setAuthData(undefined)
    // delete tokens from storage
    storage.delete(USER_TOKENS)
  }

  return (
    // this component will be used to encapsulate the whole app
    // all components will have access to the Context
    <AuthContext.Provider
      value={{ authData, userData, loginFail, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider }
