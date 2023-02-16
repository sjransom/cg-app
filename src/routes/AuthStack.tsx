import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SignIn from '../screens/SignIn'
import { COLORS } from '../utils/colors'
import { View } from 'react-native'

const Stack = createNativeStackNavigator()

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerShadowVisible: false,
        headerTitle: () => <View />,
        headerStyle: { backgroundColor: 'transparent' },
        contentStyle: { backgroundColor: COLORS.white }
      }}>
      <Stack.Screen name="Sign In" component={SignIn} />
    </Stack.Navigator>
  )
}
