import {
  LoginWithGoogleCase,
  LoginWithGoogleCaseOutput,
} from 'auth/useCases/loginWithGoogle.case'

import { FirebaseAuthPort } from 'auth/ports/firebaseAuth.port'

export default class LoginWithGoogleCaseImpl implements LoginWithGoogleCase {
  constructor(private readonly firebaseAuth: FirebaseAuthPort) {}

  async execute(): LoginWithGoogleCaseOutput {
    const user = await this.firebaseAuth.loginWithGoogle()
    return user
  }
}
