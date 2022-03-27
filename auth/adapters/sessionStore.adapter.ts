import { User } from 'auth/entities/users'

import { SessionStorePort } from 'auth/ports/sessionStore.port'

import { makeAutoObservable } from 'mobx'

export default class SessionStoreAdapter implements SessionStorePort {
  user: User | null = null

  constructor() {
    makeAutoObservable(this)
  }

  set(user: User): boolean {
    this.user = user
    return true
  }

  get(): User | null {
    return this.user
  }

  delete(): boolean {
    this.user = null
    return true
  }
}
