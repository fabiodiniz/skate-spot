import { User } from 'auth/entities/users'

import { FirebaseAuthPort } from 'auth/ports/firebaseAuth.port'

import {
  Auth,
  browserLocalPersistence,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth'

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
    await setPersistence(this.getAuth(), browserLocalPersistence)
    const result = await signInWithEmailAndPassword(
      this.getAuth(),
      email,
      password
    )
    return result.user
  }

  async signUpWithGoogle() {
    await setPersistence(this.getAuth(), browserLocalPersistence)
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(this.getAuth(), provider)
    return result.user
  }

  async logout() {
    await signOut(this.getAuth())
    return true
  }
}
