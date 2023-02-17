import Config from 'react-native-config'
import { tokensFromStorage } from './utils'

export const logout = async () => {
  try {
    await fetch(`${Config.API_URL}/logout`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        refreshToken: tokensFromStorage.refreshToken
      })
    })
  } catch (error) {
    console.log(error, 'logout API request failed')
  }
}
