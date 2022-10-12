import DependencyEnum from 'shared/domain/entities/dependencyEnum'

import LoginCaseImpl from 'auth/data/useCases/classes/login.caseImpl'
import LogoutCaseImpl from 'auth/data/useCases/classes/logout.caseImpl'
import ReloadSessionCaseImpl from 'auth/data/useCases/classes/reloadSession.caseImpl'
import SignInWithGoogleCaseImpl from 'auth/data/useCases/classes/signInWithGoogle.caseImpl'

import { Lifecycle } from 'tsyringe'

const UseCases = [
  {
    token: DependencyEnum.RELOAD_SESSION_CASE,
    useClass: ReloadSessionCaseImpl,
    options: { lifecycle: Lifecycle.Singleton },
  },
  {
    token: DependencyEnum.RELOAD_SESSION_CASE,
    useClass: ReloadSessionCaseImpl,
    options: { lifecycle: Lifecycle.Singleton },
  },
  {
    token: DependencyEnum.LOGIN_CASE,
    useClass: LoginCaseImpl,
    options: { lifecycle: Lifecycle.Singleton },
  },
  {
    token: DependencyEnum.SIGN_IN_WITH_GOOGLE_CASE,
    useClass: SignInWithGoogleCaseImpl,
    options: { lifecycle: Lifecycle.Singleton },
  },
  {
    token: DependencyEnum.LOGOUT_CASE,
    useClass: LogoutCaseImpl,
    options: { lifecycle: Lifecycle.Singleton },
  },
]

export default UseCases
