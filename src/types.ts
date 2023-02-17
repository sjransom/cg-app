export type AuthData = {
  accessToken: string
  refreshToken: string
}

export type UserData = {
  id: string
  name: string
  username: string
}

export type LoginParams = {
  username: string
  password: string
}

export type AuthContextData = {
  authData?: AuthData
  userData?: UserData
  loginFail?: boolean
  loading?: boolean
  signIn(params: LoginParams): Promise<void>
  signOut(): void
}

export interface Post {
  id: string
  avatar: string
  name: string
  createdDate: string
  image?: string
  heading: string
  body: string
  motm?: string
}

export interface Posts {
  posts: Post[]
}
