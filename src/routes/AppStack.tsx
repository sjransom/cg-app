import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Fixtures from '../screens/FixturesResults'
import News from '../screens/News'
import Team from '../screens/Team'

const Tab = createBottomTabNavigator()

export const AppStack = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="News" component={News} />
      <Tab.Screen name="Fixtures/Results" component={Fixtures} />
      <Tab.Screen name="Team" component={Team} />
    </Tab.Navigator>
  )
}
