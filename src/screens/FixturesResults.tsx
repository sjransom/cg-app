import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import AppHeader from '../components/AppHeader'
import { SPACING } from '../utils/spacing'

const Fixtures = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <AppHeader text="Fixtures and Results" />
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

export default Fixtures
