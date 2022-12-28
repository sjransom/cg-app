import React from 'react'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { useAuth0, Auth0Provider } from 'react-native-auth0'

const App = () => {
  const LoginButton = () => {
    const { authorize } = useAuth0()

    const onPress = async () => {
      try {
        await authorize({ prompt: 'login' })
      } catch (e) {
        console.log(e)
      }
    }

    return <Button onPress={onPress} title="Log in" />
  }

  const LogoutButton = () => {
    const { clearSession } = useAuth0()

    const onPress = async () => {
      try {
        await clearSession()
      } catch (e) {
        console.log(e)
      }
    }

    return <Button onPress={onPress} title="Log out" />
  }

  const Profile = () => {
    const { user } = useAuth0()

    return (
      <>
        {user && <Text>Logged in as {user.name}</Text>}
        {!user && <Text>Not logged in</Text>}
      </>
    )
  }

  return (
    <Auth0Provider
      domain={'dev-0uk7xrafzbdga67g.uk.auth0.com'}
      clientId={'jt79e1Cn2713OEZz1MLAFCOFz0rYiJn6'}>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <LoginButton />
            <Profile />
            <LogoutButton />
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
