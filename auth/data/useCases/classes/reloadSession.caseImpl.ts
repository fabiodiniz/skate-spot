import { ReloadSessionCase } from 'auth/data/useCases/reloadSession.case'

import FirebaseAuthAdapter from 'auth/infra/firebaseAuth.adapter'
import SessionStoreAdapter from 'auth/infra/sessionStore.adapter'

import { Service, Inject } from 'typedi'

@Service('reloadSession.caseImpl')
export default class ReloadSessionCaseImpl implements ReloadSessionCase {
  // @Inject('firebaseAuth.adapter')
  // firebaseAuth!: FirebaseAuthAdapter

  // @Inject('sessionStore.adapter')
  // sessionStore!: SessionStoreAdapter

  constructor(
    private sessionStore: SessionStoreAdapter,
    private firebaseAuth: FirebaseAuthAdapter
  ) {}

  async execute() {
    const user = await this.firebaseAuth.getUser()
    if (user) this.sessionStore.set(user)
  }
}
