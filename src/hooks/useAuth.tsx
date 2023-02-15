import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider'
import { AuthContextData } from '../types'

// simple hook that extracts the context connections logic
export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
