import React from 'react'
import { Image, StyleSheet, View } from 'react-native'

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
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 250,
    height: 250
  }
})

export default MainLogo
