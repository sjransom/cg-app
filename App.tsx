import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Fixtures from './src/screens/Fixtures'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Fixtures" component={Fixtures} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
