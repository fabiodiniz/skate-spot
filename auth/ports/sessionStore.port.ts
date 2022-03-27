import { User } from 'auth/entities/users'

export type SessionStorePort = {
  set(user: User): void
  get(): User | null
  delete(): void
}
