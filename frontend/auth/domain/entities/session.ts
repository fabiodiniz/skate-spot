import { User } from 'auth/domain/entities/users'

export type Session = {
  user: User
  token: string
}
