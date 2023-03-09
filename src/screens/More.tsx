import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import AppButton from '../components/AppButton'
import AppHeader from '../components/AppHeader'
import { useAuth } from '../hooks/useAuth'
import { UserData } from '../types'
import { SPACING } from '../utils/spacing'

const More = () => {
  const auth = useAuth()
  const { id, name, username } = auth.userData as UserData
  const onPressSignOut = () => auth.signOut()

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <AppHeader text="More" />
          {auth.userData && (
            <View style={styles.details}>
              <Text>PlayerID: {id}</Text>
              <Text>name: {name}</Text>
              <Text>email: {username}</Text>
            </View>
          )}
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
  },
  details: {
    marginVertical: SPACING.s12
  }
})

export default More
