import Config from 'react-native-config'
// import { AuthData } from '../types'

export const login = async (username: string, password: string) => {
  try {
    const response = await fetch(`${Config.API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    const data = await response.json()
    return data
  } catch (error) {
    console.log(error, 'login API request failed')
    return false
  }
}
