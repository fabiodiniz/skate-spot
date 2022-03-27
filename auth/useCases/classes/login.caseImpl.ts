import isEmailValid from 'auth/rules/isEmailValid.rule'
import isPasswordValid from 'auth/rules/isPasswordValid.rule'

import {
  LoginCase,
  LoginCaseInput,
  LoginCaseOutput,
} from 'auth/useCases/login.case'

import { FirebaseAuthPort } from 'auth/ports/firebaseAuth.port'

export default class LoginCaseImpl implements LoginCase {
  constructor(private readonly firebaseAuth: FirebaseAuthPort) {}

  isValid(params: LoginCaseInput): boolean {
    return isEmailValid(params.email) && isPasswordValid(params.password)
  }

  async execute(params: LoginCaseInput): LoginCaseOutput {
    const user = await this.firebaseAuth.login(params.email, params.password)
    return user
  }
}
