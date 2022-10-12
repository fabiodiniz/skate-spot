import { User } from 'auth/domain/entities/users'
import DependencyEnum from 'shared/domain/entities/dependencyEnum'

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
import { container, Lifecycle, injectable } from 'tsyringe'

@injectable()
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

container.register(
  DependencyEnum.FIREBASE_AUTH_ADAPTER,
  {
    useClass: FirebaseAuthAdapter,
  },
  { lifecycle: Lifecycle.Singleton }
)
