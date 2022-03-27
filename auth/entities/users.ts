export type User = {
  uid: string
  email: string | null
  photoURL: string | null
  providerId: string
  displayName: string | null
  accessToken?: string
  emailVerified: boolean
  isAnonymous: boolean
  metadata: {
    creationTime?: string
    lastSignInTime?: string
  }
}
