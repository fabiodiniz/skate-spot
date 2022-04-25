import isEmailValid from 'auth/domain/rules/isEmailValid.rule'
import isPasswordValid from 'auth/domain/rules/isPasswordValid.rule'

import {
  LoginCase,
  LoginCaseInput,
  LoginCaseOutput,
} from 'auth/data/useCases/login.case'

import { FirebaseAuthPort } from 'auth/data/ports/firebaseAuth.port'
import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

export default class LoginCaseImpl implements LoginCase {
  constructor(
    private readonly firebaseAuth: FirebaseAuthPort,
    private readonly sessionStore: SessionStorePort
  ) {}

  isValid(params: LoginCaseInput): boolean {
    return isEmailValid(params.email) && isPasswordValid(params.password)
  }

  async execute(params: LoginCaseInput): LoginCaseOutput {
    const user = await this.firebaseAuth.login(params.email, params.password)
    this.sessionStore.set(user)
    return user
  }
}
