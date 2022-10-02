import {
  SignInWithGoogleCase,
  SignInWithGoogleCaseOutput,
} from 'auth/data/useCases/signInWithGoogle.case'

import FirebaseAuthAdapter from 'auth/infra/firebaseAuth.adapter'
import SessionStoreAdapter from 'auth/infra/sessionStore.adapter'

import { Inject } from 'typedi'

export default class SignInWithGoogleCaseImpl implements SignInWithGoogleCase {
  // @Inject('firebaseAuth.adapter')
  // firebaseAuth!: FirebaseAuthAdapter

  // @Inject('sessionStore.adapter')
  // sessionStore!: SessionStoreAdapter

  constructor(
    private sessionStore: SessionStoreAdapter,
    private firebaseAuth: FirebaseAuthAdapter
  ) {}

  async execute(): SignInWithGoogleCaseOutput {
    const user = await this.firebaseAuth.signInWithGoogle()
    this.sessionStore.set(user)
    return user
  }
}
