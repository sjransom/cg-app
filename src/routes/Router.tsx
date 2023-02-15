import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'
import Loading from '../components/Loading'

export const Router = () => {
  const authData = false
  const loading = false

  if (loading) {
    return <Loading />
  }
  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
