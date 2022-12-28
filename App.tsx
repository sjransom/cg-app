import React from 'react'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View
} from 'react-native'
import { useAuth0, Auth0Provider } from 'react-native-auth0'

const App = () => {
  const LoginButton = () => {
    const { authorize } = useAuth0()

    const onPress = async () => {
      try {
        console.log('clicked')
        await authorize()
      } catch (e) {
        console.log(e)
      }
    }

    return <Button onPress={onPress} title="Log in" />
  }

  return (
    <Auth0Provider
      domain={'dev-0uk7xrafzbdga67g.uk.auth0.com'}
      clientId={'jt79e1Cn2713OEZz1MLAFCOFz0rYiJn6'}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <LoginButton />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Auth0Provider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default App
