import { RouterEnum } from 'shared/domain/entities/routes'

export interface DashboardStorePort {
  getActiveTab(): RouterEnum
  setActiveTab(tab: RouterEnum): void
}
