import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Fixtures from '../screens/FixturesResults'
import News from '../screens/News'
import Team from '../screens/Team'
import More from '../screens/More'

const Tab = createBottomTabNavigator()

export const AppStack = () => {
  return (
    <Tab.Navigator
      //safeAreaInsets={{ top: 0 }}
      screenOptions={{
        headerTransparent: true,
        headerShadowVisible: false,
        headerTitle: () => <View />,
        headerStyle: { backgroundColor: 'transparent' }
      }}>
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Fixtures/Results" component={Fixtures} />
      <Tab.Screen name="Team" component={Team} />
      <Tab.Screen name="More" component={More} />
    </Tab.Navigator>
  )
}
