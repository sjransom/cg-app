export type AuthData = {
  username: string
  password: string
}

export type AuthContextData = {
  authData?: AuthData
  loading?: boolean
  signIn(params: AuthData): Promise<void>
  signOut(): void
}