import React from 'react'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View
} from 'react-native'
import { useAuth } from '../hooks/useAuth'

export const SignIn = () => {
  const auth = useAuth()

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>Sign In Screen</Text>
          <Button title="Sign In" onPress={auth.signIn} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default SignIn
