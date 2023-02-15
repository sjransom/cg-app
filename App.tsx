import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Fixtures from './src/screens/Fixtures'
import Login from './src/screens/Login'

const Tab = createBottomTabNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="News" component={Login} />
        <Tab.Screen name="Fixtures" component={Fixtures} />
        <Tab.Screen name="Results" component={Login} />
        <Tab.Screen name="Stats" component={Login} />
        <Tab.Screen name="Admin" component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App
