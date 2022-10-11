import LoginCaseImpl from 'auth/data/useCases/classes/login.caseImpl'
import LogoutCaseImpl from 'auth/data/useCases/classes/logout.caseImpl'
import ReloadSessionCaseImpl from 'auth/data/useCases/classes/reloadSession.caseImpl'
import SignInWithGoogleCaseImpl from 'auth/data/useCases/classes/signInWithGoogle.caseImpl'

import DependencyEnum from 'shared/application/dependencyEnum'
import { Lifecycle } from 'tsyringe'

const UseCases = [
  {
    token: DependencyEnum.ReloadSessionCaseImpl,
    useClass: ReloadSessionCaseImpl,
    options: { lifecycle: Lifecycle.Singleton },
  },
  {
    token: DependencyEnum.ReloadSessionCaseImpl,
    useClass: ReloadSessionCaseImpl,
    options: { lifecycle: Lifecycle.Singleton },
  },
  {
    token: DependencyEnum.LoginCaseImpl,
    useClass: LoginCaseImpl,
    options: { lifecycle: Lifecycle.Singleton },
  },
  {
    token: DependencyEnum.SignInWithGoogleCaseImpl,
    useClass: SignInWithGoogleCaseImpl,
    options: { lifecycle: Lifecycle.Singleton },
  },
  {
    token: DependencyEnum.LogoutCaseImpl,
    useClass: LogoutCaseImpl,
    options: { lifecycle: Lifecycle.Singleton },
  },
]

export default UseCases
