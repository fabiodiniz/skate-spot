import { ReloadSessionCase } from 'auth/data/useCases/reloadSession.case'

import { FirebaseAuthPort } from 'auth/data/ports/firebaseAuth.port'
import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

export default class ReloadSessionCaseImpl implements ReloadSessionCase {
  constructor(
    private readonly firebaseAuth: FirebaseAuthPort,
    private readonly sessionStore: SessionStorePort
  ) {}

  async execute() {
    const user = await this.firebaseAuth.getUser()
    if (user) this.sessionStore.set(user)
  }
}
