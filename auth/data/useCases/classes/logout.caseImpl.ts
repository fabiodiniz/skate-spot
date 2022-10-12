import DependencyEnum from 'shared/domain/entities/dependencyEnum'

import { LogoutCase, LogoutCaseOutput } from 'auth/data/useCases/logout.case'

import { FirebaseAuthPort } from 'auth/data/ports/firebaseAuth.port'
import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

import { container, inject, Lifecycle, injectable } from 'tsyringe'

@injectable()
export default class LogoutCaseImpl implements LogoutCase {
  constructor(
    @inject(DependencyEnum.FIREBASE_AUTH_ADAPTER)
    private readonly firebaseAuth: FirebaseAuthPort,
    @inject(DependencyEnum.SESSION_STORE_ADAPTER)
    private readonly sessionStore: SessionStorePort
  ) {}

  async execute(): LogoutCaseOutput {
    await this.firebaseAuth.logout()
    this.sessionStore.delete()
    return true
  }
}

container.register(
  DependencyEnum.LOGOUT_CASE,
  {
    useClass: LogoutCaseImpl,
  },
  { lifecycle: Lifecycle.Singleton }
)
