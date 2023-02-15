import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'
import Loading from '../components/Loading'
import { useAuth } from '../hooks/useAuth'

// this Router will use the useAuth hook to decide which correct stack to display
// it will show a Loading component if data is not ready.

export const Router = () => {
  const { authData, loading } = useAuth()

  if (loading) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
