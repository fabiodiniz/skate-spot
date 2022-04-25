import {
  SignInWithGoogleCase,
  SignInWithGoogleCaseOutput,
} from 'auth/data/useCases/signInWithGoogle.case'

import { FirebaseAuthPort } from 'auth/data/ports/firebaseAuth.port'
import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

export default class SignInWithGoogleCaseImpl implements SignInWithGoogleCase {
  constructor(
    private readonly firebaseAuth: FirebaseAuthPort,
    private readonly sessionStore: SessionStorePort
  ) {}

  async execute(): SignInWithGoogleCaseOutput {
    const user = await this.firebaseAuth.signInWithGoogle()
    this.sessionStore.set(user)
    return user
  }
}
