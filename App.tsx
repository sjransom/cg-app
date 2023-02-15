import React from 'react'
import { AuthProvider } from './src/contexts/AuthProvider'
import { Router } from './src/routes/Router'

const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  )
}

export default App
