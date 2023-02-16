import React from 'react'
import { Button } from 'react-native'

interface AppButtonProps {
  title: string
  onPress(): void
}

const AppButton: React.FC<AppButtonProps> = ({ title, onPress }) => {
  return <Button title={title} onPress={onPress} />
}

export default AppButton
