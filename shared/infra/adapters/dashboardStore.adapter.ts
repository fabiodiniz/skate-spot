import DependencyEnum from 'shared/domain/entities/dependencyEnum'
import { RouterEnum } from 'shared/domain/entities/routes'

import { DashboardStorePort } from 'shared/data/ports/dashboardStore.port'

import { makeAutoObservable } from 'mobx'
import { container, Lifecycle, injectable } from 'tsyringe'

@injectable()
export default class DashboardStoreAdapter implements DashboardStorePort {
  activeTab: RouterEnum = RouterEnum.SPOTS

  constructor() {
    makeAutoObservable(this)
  }

  getActiveTab(): RouterEnum {
    return this.activeTab
  }

  setActiveTab(tab: RouterEnum): void {
    this.activeTab = tab
  }
}

container.register(
  DependencyEnum.DASHBOARD_STORE_ADAPTER,
  {
    useClass: DashboardStoreAdapter,
  },
  { lifecycle: Lifecycle.Singleton }
)
