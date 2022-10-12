import DependencyEnum from 'shared/domain/entities/dependencyEnum'

import {
  SignInWithGoogleCase,
  SignInWithGoogleCaseOutput,
} from 'auth/data/useCases/signInWithGoogle.case'

import { FirebaseAuthPort } from 'auth/data/ports/firebaseAuth.port'
import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

import { inject, singleton } from 'tsyringe'

@singleton()
export default class SignInWithGoogleCaseImpl implements SignInWithGoogleCase {
  constructor(
    @inject(DependencyEnum.FIREBASE_AUTH_ADAPTER)
    private readonly firebaseAuth: FirebaseAuthPort,
    @inject(DependencyEnum.SESSION_STORE_ADAPTER)
    private readonly sessionStore: SessionStorePort
  ) {}

  async execute(): SignInWithGoogleCaseOutput {
    const user = await this.firebaseAuth.signInWithGoogle()
    this.sessionStore.set(user)
    return user
  }
}
