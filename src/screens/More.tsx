import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'
import { useAuth } from '../hooks/useAuth'

const More = () => {
  const auth = useAuth()
  const onPressSignOut = () => auth.signOut()

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>More</Text>
          <AppButton type="PRIMARY" title="Sign Out" onPress={onPressSignOut} />
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

export default More
