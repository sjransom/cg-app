import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

const Fixtures = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Text>Fixtures</Text>
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

export default Fixtures
