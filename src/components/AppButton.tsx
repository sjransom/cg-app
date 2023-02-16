import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'
import { COLORS } from '../utils/colors'
import { SPACING } from '../utils/spacing'

interface AppButtonProps {
  type: 'PRIMARY' | 'SECONDARY'
  title: string
  onPress(): void
}

const AppButton: React.FC<AppButtonProps> = ({ type, title, onPress }) => {
  return (
    <Pressable
      style={[
        { backgroundColor: type === 'PRIMARY' ? COLORS.black : COLORS.white },
        styles.button
      ]}
      onPress={onPress}>
      <Text
        style={[
          { color: type === 'PRIMARY' ? COLORS.white : COLORS.black },
          styles.text
        ]}>
        {title}
      </Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.s16,
    paddingVertical: SPACING.s12,
    paddingHorizontal: SPACING.s32,
    borderRadius: SPACING.s16
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold'
  }
})

export default AppButton
