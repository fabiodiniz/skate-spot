import FirebaseAuthAdapter from 'auth/infra/firebaseAuth.adapter'
import SessionStoreAdapter from 'auth/infra/sessionStore.adapter'

import RootStore from 'rootStore'
import DependencyEnum from 'shared/application/dependencyEnum'
import { Lifecycle } from 'tsyringe'

const Adapters = [
  {
    token: DependencyEnum.ROOT_STORE,
    useClass: RootStore,
    options: { lifecycle: Lifecycle.Singleton },
  },
  {
    token: DependencyEnum.SESSION_STORE_ADAPTER,
    useClass: SessionStoreAdapter,
    options: { lifecycle: Lifecycle.Singleton },
  },
  {
    token: DependencyEnum.FIREBASE_AUTH_ADAPTER,
    useClass: FirebaseAuthAdapter,
    options: { lifecycle: Lifecycle.Singleton },
  },
]

export default Adapters
