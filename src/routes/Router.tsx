import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { AppStack } from './AppStack'
import { AuthStack } from './AuthStack'
import { useAuth } from '../hooks/useAuth'

// router will use the useAuth hook to decide which correct stack to display
export const Router = () => {
  const { authData } = useAuth()

  return (
    <NavigationContainer>
      {authData ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  )
}
