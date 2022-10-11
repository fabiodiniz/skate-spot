const enum DependencyEnum {
  // Adapters
  ROOT_STORE = 'rootStore',
  SESSION_STORE_ADAPTER = 'sessionStore.adapter',
  FIREBASE_AUTH_ADAPTER = 'firebaseAuth.adapter',

  // Use Cases
  RELOAD_SESSION_CASE = 'reloadSession.caseImpl',
  LOGIN_CASE = 'login.caseImpl',
  SIGN_IN_WITH_GOOGLE_CASE = 'signInWithGoogle.caseImpl',
  LOGOUT_CASE = 'logout.caseImpl',
}

export default DependencyEnum
