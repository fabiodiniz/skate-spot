import DependencyEnum from 'shared/domain/entities/dependencyEnum'

import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

import { container, inject, Lifecycle, injectable } from 'tsyringe'

@injectable()
export default class RootStore {
  constructor(
    @inject(DependencyEnum.SESSION_STORE_ADAPTER)
    public readonly sessionStore: SessionStorePort
  ) {}
}

container.register(
  DependencyEnum.ROOT_STORE,
  {
    useClass: RootStore,
  },
  { lifecycle: Lifecycle.Singleton }
)
