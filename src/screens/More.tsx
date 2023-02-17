import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import AppButton from '../components/AppButton'
import AppHeader from '../components/AppHeader'
import { useAuth } from '../hooks/useAuth'
import { SPACING } from '../utils/spacing'

const More = () => {
  const auth = useAuth()
  const onPressSignOut = () => auth.signOut()

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <AppHeader text="More" />
          <AppButton type="PRIMARY" title="Sign Out" onPress={onPressSignOut} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACING.s16
  }
})

export default More
