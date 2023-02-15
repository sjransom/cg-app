import React, { useState } from 'react'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View
} from 'react-native'
import { useAuth } from '../hooks/useAuth'

export const SignIn = () => {
  const auth = useAuth()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onPress = () => {
    auth.signIn({ username, password })
  }

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(text: string) => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(text: string) => setPassword(text)}
          />
          <Button title="Sign In" onPress={onPress} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10
  }
})

export default SignIn
