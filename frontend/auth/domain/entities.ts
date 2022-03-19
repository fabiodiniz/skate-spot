export type User = {
  uid: number
  email: string
  name?: string
}

export type Session = {
  user: User
  token: string
}
