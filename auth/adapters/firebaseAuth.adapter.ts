import { User } from 'auth/entities/users'

import { FirebaseAuthPort } from 'auth/ports/firebaseAuth.port'

import {
  Auth,
  getAuth,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'

export default class firebaseAuthAdapter implements FirebaseAuthPort {
  getAuth(): Auth {
    return getAuth()
  }

  getUser(): User | null {
    const user = getAuth().currentUser
    return user
  }

  async login(email: string, password: string) {
    const result = await signInWithEmailAndPassword(
      this.getAuth(),
      email,
      password
    )
    return result.user
  }

  async loginWithGoogle() {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(this.getAuth(), provider)
    return result.user
  }

  async signUpWithGoogle() {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(this.getAuth(), provider)
    return result.user
  }

  async logout() {
    await signOut(this.getAuth())
    return true
  }
}
