import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

import SessionStoreAdapter from 'auth/infra/sessionStore.adapter'

export default class RootStore {
  sessionStore: SessionStorePort

  constructor() {
    this.sessionStore = new SessionStoreAdapter()
  }
}
