import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Fixtures from './src/screens/FixturesResults'
import News from './src/screens/News'
import Team from './src/screens/Team'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Fixtures/Results" component={Fixtures} />
        <Tab.Screen name="Team" component={Team} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
