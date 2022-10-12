import { User } from 'auth/domain/entities/users'
import DependencyEnum from 'shared/domain/entities/dependencyEnum'

import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

import { makeAutoObservable } from 'mobx'
import { container, Lifecycle, injectable } from 'tsyringe'

@injectable()
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

container.register(
  DependencyEnum.SESSION_STORE_ADAPTER,
  {
    useClass: SessionStoreAdapter,
  },
  { lifecycle: Lifecycle.Singleton }
)
