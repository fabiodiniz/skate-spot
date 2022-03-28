import { User } from 'auth/entities/users'

import { Auth } from 'firebase/auth'

export interface FirebaseAuthPort {
  getAuth(): Auth
  getUser(): Promise<User | null>
  login(email: string, password: string): Promise<User>
  signInWithGoogle(): Promise<User>
  logout(): Promise<boolean>
}
