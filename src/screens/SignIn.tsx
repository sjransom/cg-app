import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import { COLORS } from '../utils/colors'
import { useAuth } from '../hooks/useAuth'
import { SPACING } from '../utils/spacing'
import AppButton from '../components/AppButton'
import AppHeader from '../components/AppHeader'

export const SignIn = () => {
  const auth = useAuth()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onPress = () => auth.signIn({ username, password })

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <AppHeader text="Login" />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            onChangeText={(text: string) => setUsername(text.toLowerCase())}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={(text: string) => setPassword(text)}
          />
          <AppButton title="Sign In" onPress={onPress} />
        </View>
        <View>{auth.loginFail && <Text>Login failed</Text>}</View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.s16
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginTop: SPACING.s12,
    padding: SPACING.s12
  }
})

export default SignIn
