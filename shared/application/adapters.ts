import DependencyEnum from 'shared/domain/entities/dependencyEnum'

import FirebaseAuthAdapter from 'auth/infra/firebaseAuth.adapter'
import SessionStoreAdapter from 'auth/infra/sessionStore.adapter'
import HttpAdapter from 'shared/infra/adapters/http.adapter'

import RootStore from 'rootStore'
import { Lifecycle } from 'tsyringe'

const Adapters = [
  {
    token: DependencyEnum.ROOT_STORE,
    useClass: RootStore,
    options: { lifecycle: Lifecycle.Singleton },
  },
  {
    token: DependencyEnum.HTTP_ADAPTER,
    useClass: HttpAdapter,
    options: { lifecycle: Lifecycle.Singleton },
  },
  {
    token: DependencyEnum.FIREBASE_AUTH_ADAPTER,
    useClass: FirebaseAuthAdapter,
    options: { lifecycle: Lifecycle.Singleton },
  },
  {
    token: DependencyEnum.SESSION_STORE_ADAPTER,
    useClass: SessionStoreAdapter,
    options: { lifecycle: Lifecycle.Singleton },
  },
]

export default Adapters
