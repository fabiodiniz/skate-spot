import {
  SignUpWithGoogleCase,
  SignUpWithGoogleCaseOutput,
} from 'auth/useCases/signUpWithGoogle.case'

import { FirebaseAuthPort } from 'auth/ports/firebaseAuth.port'
import { SessionStorePort } from 'auth/ports/sessionStore.port'

export default class SignUpWithGoogleCaseImpl implements SignUpWithGoogleCase {
  constructor(
    private readonly firebaseAuth: FirebaseAuthPort,
    private readonly sessionStore: SessionStorePort
  ) {}

  async execute(): SignUpWithGoogleCaseOutput {
    const user = await this.firebaseAuth.signUpWithGoogle()
    this.sessionStore.set(user)
    return user
  }
}
