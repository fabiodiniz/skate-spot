import DependencyEnum from 'shared/domain/entities/dependencyEnum'

import { ReloadSessionCase } from 'auth/data/useCases/reloadSession.case'

import { FirebaseAuthPort } from 'auth/data/ports/firebaseAuth.port'
import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

import { container, inject, Lifecycle, injectable } from 'tsyringe'

@injectable()
export default class ReloadSessionCaseImpl implements ReloadSessionCase {
  constructor(
    @inject(DependencyEnum.FIREBASE_AUTH_ADAPTER)
    private readonly firebaseAuth: FirebaseAuthPort,
    @inject(DependencyEnum.SESSION_STORE_ADAPTER)
    private readonly sessionStore: SessionStorePort
  ) {}

  async execute() {
    const user = await this.firebaseAuth.getUser()
    if (user) this.sessionStore.set(user)
  }
}

container.register(
  DependencyEnum.RELOAD_SESSION_CASE,
  {
    useClass: ReloadSessionCaseImpl,
  },
  { lifecycle: Lifecycle.Singleton }
)
