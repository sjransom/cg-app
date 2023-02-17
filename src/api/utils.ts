// retrieve user accessTokens from MMKV storage

import { AuthData } from '../types'
import { storage, USER_TOKENS } from '../utils/mmkv'

// deserialize the JSON string into an object
const tokens = storage.getString(USER_TOKENS)
export const tokensFromStorage: AuthData = tokens && JSON.parse(tokens)
