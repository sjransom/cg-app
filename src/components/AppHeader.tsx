import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface AppHeaderProps {
  text: string
}

const AppHeader: React.FC<AppHeaderProps> = ({ text }) => {
  return <Text style={styles.text}>{text}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24
  }
})

export default AppHeader
