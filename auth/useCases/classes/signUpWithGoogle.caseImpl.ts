import {
  SignUpWithGoogleCase,
  SignUpWithGoogleCaseOutput,
} from 'auth/useCases/signUpWithGoogle.case'

import { FirebaseAuthPort } from 'auth/ports/firebaseAuth.port'

export default class SignUpWithGoogleCaseImpl implements SignUpWithGoogleCase {
  constructor(private readonly firebaseAuth: FirebaseAuthPort) {}

  async execute(): SignUpWithGoogleCaseOutput {
    const user = await this.firebaseAuth.signUpWithGoogle()
    return user
  }
}
