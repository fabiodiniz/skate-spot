import SessionStoreAdapter from 'auth/infra/sessionStore.adapter'

import { Service, Inject } from 'typedi'

@Service('rootStore')
export default class RootStore {
  // @Inject('sessionStore.adapter')
  // sessionStore!: SessionStoreAdapter
  constructor(public sessionStore: SessionStoreAdapter) {}
}
