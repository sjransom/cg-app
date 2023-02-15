export type AuthData = {
  accessToken: string
  refreshToken: string
}

export type Login = {
  username: string
  password: string
}

export type AuthContextData = {
  authData?: AuthData
  loginFail?: boolean
  loading?: boolean
  signIn(params: Login): Promise<void>
  signOut(): void
}
