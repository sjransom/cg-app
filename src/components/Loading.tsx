import React from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={'#000'} animating={true} size="small" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Loading
