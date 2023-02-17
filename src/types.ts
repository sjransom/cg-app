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
