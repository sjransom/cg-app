import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../screens/SignIn'

const Stack = createStackNavigator()

export const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Sign In Screen" component={SignIn} />
    </Stack.Navigator>
  )
}
