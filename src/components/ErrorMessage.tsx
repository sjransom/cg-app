import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface ErrorMessageProps {
  text: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ text }) => {
  return <Text style={styles.message}>{text}</Text>
}

const styles = StyleSheet.create({
  message: {
    color: 'red'
  }
})

export default ErrorMessage
