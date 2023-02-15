import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const Login = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>Login</Text>
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

export default Login
