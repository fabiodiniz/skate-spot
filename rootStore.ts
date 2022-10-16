import DependencyEnum from 'shared/domain/entities/dependencyEnum'

import { SessionStorePort } from 'auth/data/ports/sessionStore.port'
import { DashboardStorePort } from 'shared/data/ports/dashboardStore.port'

import { container, inject, Lifecycle, injectable } from 'tsyringe'

@injectable()
export default class RootStore {
  constructor(
    @inject(DependencyEnum.SESSION_STORE_ADAPTER)
    public readonly sessionStore: SessionStorePort,

    @inject(DependencyEnum.DASHBOARD_STORE_ADAPTER)
    public readonly dashboardStore: DashboardStorePort
  ) {}
}

container.register(
  DependencyEnum.ROOT_STORE,
  {
    useClass: RootStore,
  },
  { lifecycle: Lifecycle.Singleton }
)
