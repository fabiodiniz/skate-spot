import { User } from 'auth/domain/entities/users'

import { FirebaseAuthPort } from 'auth/data/ports/firebaseAuth.port'

import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { singleton } from 'tsyringe'

@singleton()
export default class FirebaseAuthAdapter implements FirebaseAuthPort {
  private auth

  constructor() {
    this.auth = getAuth()
  }

  getAuth(): Auth {
    return this.auth
  }

  getUser(): Promise<User | null> {
    return new Promise(resolve => {
      onAuthStateChanged(this.getAuth(), resolve)
    })
  }

  async login(email: string, password: string) {
    const result = await signInWithEmailAndPassword(
      this.getAuth(),
      email,
      password
    )
    return result.user
  }

  async signInWithGoogle() {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(this.getAuth(), provider)
    return result.user
  }

  async logout() {
    await signOut(this.getAuth())
    return true
  }
}
