import React, { useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  View
} from 'react-native'
import { COLORS } from '../utils/colors'
import { useAuth } from '../hooks/useAuth'
import { SPACING } from '../utils/spacing'
import AppButton from '../components/AppButton'
import MainLogo from '../components/MainLogo'
import ErrorMessage from '../components/ErrorMessage'

export const SignIn = () => {
  const auth = useAuth()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const onPressLogin = () => auth.signIn({ username, password })
  const onPressCreate = () => {} // todo

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <MainLogo />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor={COLORS.grey}
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
            placeholderTextColor={COLORS.grey}
            secureTextEntry={true}
            onChangeText={(text: string) => setPassword(text)}
          />
          <View style={styles.errorContainer}>
            {auth.loginFail && (
              <ErrorMessage text="Login failed, please try again." />
            )}
          </View>
          <AppButton type="PRIMARY" title="Login" onPress={onPressLogin} />
          <AppButton
            type="SECONDARY"
            title="Create an account"
            onPress={onPressCreate}
          />
        </View>
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
    borderRadius: 10,
    borderColor: COLORS.grey,
    marginTop: SPACING.s12,
    padding: SPACING.s12
  },
  errorContainer: {
    marginTop: SPACING.s16,
    alignItems: 'center'
  }
})

export default SignIn
