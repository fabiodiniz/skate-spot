import { User } from 'auth/entities/users'

import { Auth } from 'firebase/auth'

export interface FirebaseAuthPort {
  getAuth(): Auth
  getUser(): User | null
  login(email: string, password: string): Promise<User>
  loginWithGoogle(): Promise<User>
  signUpWithGoogle(): Promise<User>
  logout(): Promise<boolean>
}