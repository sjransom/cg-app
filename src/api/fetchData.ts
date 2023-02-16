import { storage, USER_TOKENS } from '../utils/mmkv'

// retrieve user accessTokens from MMKV storage
// deserialize the JSON string into an object
const tokens = storage.getString(USER_TOKENS)
const tokensObject = tokens && JSON.parse(tokens)

const options = {
  headers: {
    Authorization: tokensObject.accessToken
  }
}

export const fetchData = async (url: string) => {
  const res = await fetch(url, options)
  const result = res.json()
  return result
}
