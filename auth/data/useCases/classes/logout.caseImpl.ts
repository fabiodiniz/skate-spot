import { LogoutCase, LogoutCaseOutput } from 'auth/data/useCases/logout.case'

import { FirebaseAuthPort } from 'auth/data/ports/firebaseAuth.port'
import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

import DependencyEnum from 'shared/application/dependencyEnum'
import { inject, singleton } from 'tsyringe'

@singleton()
export default class LogoutCaseImpl implements LogoutCase {
  constructor(
    @inject(DependencyEnum.FirebaseAuthAdapter)
    private readonly firebaseAuth: FirebaseAuthPort,
    @inject(DependencyEnum.SessionStoreAdapter)
    private readonly sessionStore: SessionStorePort
  ) {}

  async execute(): LogoutCaseOutput {
    await this.firebaseAuth.logout()
    this.sessionStore.delete()
    return true
  }
}
