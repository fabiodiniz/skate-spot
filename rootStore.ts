import { SessionStorePort } from 'auth/ports/sessionStore.port'

import SessionStoreAdapter from 'auth/adapters/sessionStore.adapter'

export default class RootStore {
  sessionStore: SessionStorePort

  constructor() {
    this.sessionStore = new SessionStoreAdapter()
  }
}
