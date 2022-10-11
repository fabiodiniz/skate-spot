import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

import DependencyEnum from 'shared/application/dependencyEnum'
import { inject, singleton } from 'tsyringe'

@singleton()
export default class RootStore {
  constructor(
    @inject(DependencyEnum.SESSION_STORE_ADAPTER)
    public readonly sessionStore: SessionStorePort
  ) {}
}
