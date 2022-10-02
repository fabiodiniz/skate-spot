import isEmailValid from 'auth/domain/rules/isEmailValid.rule'
import isPasswordValid from 'auth/domain/rules/isPasswordValid.rule'

import {
  LoginCase,
  LoginCaseInput,
  LoginCaseOutput,
} from 'auth/data/useCases/login.case'

import FirebaseAuthAdapter from 'auth/infra/firebaseAuth.adapter'
import SessionStoreAdapter from 'auth/infra/sessionStore.adapter'

import { Inject, Service } from 'typedi'

@Service('login.caseImpl')
export default class LoginCaseImpl implements LoginCase {
  // @Inject('firebaseAuth.adapter')
  // firebaseAuth!: FirebaseAuthAdapter

  // @Inject('sessionStore.adapter')
  // sessionStore!: SessionStoreAdapter

  constructor(
    private sessionStore: SessionStoreAdapter,
    private firebaseAuth: FirebaseAuthAdapter
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
