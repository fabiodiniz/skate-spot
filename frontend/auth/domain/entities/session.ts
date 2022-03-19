import { User } from './users'

export type Session = {
  user: User
  token: string
}
