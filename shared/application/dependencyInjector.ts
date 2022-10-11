import LoginCaseImpl from 'auth/data/useCases/classes/login.caseImpl'
import LogoutCaseImpl from 'auth/data/useCases/classes/logout.caseImpl'
import ReloadSessionCaseImpl from 'auth/data/useCases/classes/reloadSession.caseImpl'
import SignInWithGoogleCaseImpl from 'auth/data/useCases/classes/signInWithGoogle.caseImpl'

import FirebaseAuthAdapter from 'auth/infra/firebaseAuth.adapter'
import SessionStoreAdapter from 'auth/infra/sessionStore.adapter'

import RootStore from 'rootStore'
import DependencyEnum from 'shared/application/dependencyEnum'
import { container, Lifecycle } from 'tsyringe'

// type Register = [DependencyEnum, unknown]

// const DependencyRegister: Array<Register> = [
//   [DependencyEnum.RootStore, RootStore],
//   [DependencyEnum.SessionStoreAdapter, SessionStoreAdapter],
//   [DependencyEnum.FirebaseAuthAdapter, FirebaseAuthAdapter],
//   [DependencyEnum.ReloadSessionCaseImpl, ReloadSessionCaseImpl],
//   [DependencyEnum.LoginCaseImpl, LoginCaseImpl],
//   [DependencyEnum.SignInWithGoogleCaseImpl, SignInWithGoogleCaseImpl],
//   [DependencyEnum.LogoutCaseImpl, LogoutCaseImpl],
// ]

// DependencyRegister.forEach(([dep, impl]) => {
//   container.register(dep as string, {
//     useClass: impl,
//     lifecycle: Lifecycle.Singleton,
//   })
// })

container.register(
  DependencyEnum.RootStore,
  {
    useClass: RootStore,
  },
  { lifecycle: Lifecycle.Singleton }
)

container.register(
  DependencyEnum.SessionStoreAdapter,
  {
    useClass: SessionStoreAdapter,
  },
  { lifecycle: Lifecycle.Singleton }
)

container.register(
  DependencyEnum.FirebaseAuthAdapter,
  {
    useClass: FirebaseAuthAdapter,
  },
  { lifecycle: Lifecycle.Singleton }
)

container.register(
  DependencyEnum.ReloadSessionCaseImpl,
  {
    useClass: ReloadSessionCaseImpl,
  },
  { lifecycle: Lifecycle.Singleton }
)

container.register(
  DependencyEnum.SignInWithGoogleCaseImpl,
  {
    useClass: SignInWithGoogleCaseImpl,
  },
  { lifecycle: Lifecycle.Singleton }
)

container.register(
  DependencyEnum.LogoutCaseImpl,
  {
    useClass: LogoutCaseImpl,
  },
  { lifecycle: Lifecycle.Singleton }
)

container.register(
  DependencyEnum.LoginCaseImpl,
  {
    useClass: LoginCaseImpl,
  },
  { lifecycle: Lifecycle.Singleton }
)
