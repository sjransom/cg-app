import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/Login'

const Stack = createStackNavigator()

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In Screen" component={Login} />
    </Stack.Navigator>
  )
}
