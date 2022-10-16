import { User } from 'auth/domain/entities/users'

export interface SessionStorePort {
  set(user: User): void
  get(): User | null
  delete(): void
}
