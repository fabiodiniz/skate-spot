import FirebaseAuthAdapter from 'auth/infra/firebaseAuth.adapter'
import SessionStoreAdapter from 'auth/infra/sessionStore.adapter'

import RootStore from 'rootStore'
import DependencyEnum from 'shared/application/dependencyEnum'
import { Lifecycle } from 'tsyringe'

const Adapters = [
  {
    token: DependencyEnum.RootStore,
    useClass: RootStore,
    options: { lifecycle: Lifecycle.Singleton },
  },
  {
    token: DependencyEnum.SessionStoreAdapter,
    useClass: SessionStoreAdapter,
    options: { lifecycle: Lifecycle.Singleton },
  },
  {
    token: DependencyEnum.FirebaseAuthAdapter,
    useClass: FirebaseAuthAdapter,
    options: { lifecycle: Lifecycle.Singleton },
  },
]

export default Adapters
