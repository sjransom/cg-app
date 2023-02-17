import { tokensFromStorage } from './utils'

const options = {
  headers: {
    Authorization: tokensFromStorage.accessToken
  }
}

export const fetchData = async (url: string) => {
  const res = await fetch(url, options)
  const result = res.json()
  return result
}
