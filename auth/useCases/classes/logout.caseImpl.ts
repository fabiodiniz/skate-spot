import { LogoutCase, LogoutCaseOutput } from 'auth/useCases/logout.case'

import { FirebaseAuthPort } from 'auth/ports/firebaseAuth.port'
import { SessionStorePort } from 'auth/ports/sessionStore.port'

export default class LogoutCaseImpl implements LogoutCase {
  constructor(
    private readonly firebaseAuth: FirebaseAuthPort,
    private readonly sessionStore: SessionStorePort
  ) {}

  async execute(): LogoutCaseOutput {
    await this.firebaseAuth.logout()
    this.sessionStore.delete()
    return true
  }
}
