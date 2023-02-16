import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { SPACING } from '../utils/spacing'

const MainLogo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/cg.jpg')}
        style={styles.image}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: SPACING.s16,
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 250
  }
})

export default MainLogo
