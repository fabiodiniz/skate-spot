import { LogoutCase, LogoutCaseOutput } from 'auth/data/useCases/logout.case'

import FirebaseAuthAdapter from 'auth/infra/firebaseAuth.adapter'
import SessionStoreAdapter from 'auth/infra/sessionStore.adapter'

import { Inject, Service } from 'typedi'

@Service('logout.caseImpl')
export default class LogoutCaseImpl implements LogoutCase {
  // @Inject('firebaseAuth.adapter')
  // firebaseAuth!: FirebaseAuthAdapter

  // @Inject('sessionStore.adapter')
  // sessionStore!: SessionStoreAdapter

  constructor(
    private sessionStore: SessionStoreAdapter,
    private firebaseAuth: FirebaseAuthAdapter
  ) {}

  async execute(): LogoutCaseOutput {
    await this.firebaseAuth.logout()
    this.sessionStore.delete()
    return true
  }
}
