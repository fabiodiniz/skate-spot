const enum DependencyEnum {
  // Adapters
  RootStore = 'rootStore',
  SessionStoreAdapter = 'sessionStore.adapter',
  FirebaseAuthAdapter = 'firebaseAuth.adapter',

  // Use Cases
  ReloadSessionCaseImpl = 'reloadSession.caseImpl',
  LoginCaseImpl = 'login.caseImpl',
  SignInWithGoogleCaseImpl = 'signInWithGoogle.caseImpl',
  LogoutCaseImpl = 'logout.caseImpl',
}

export default DependencyEnum
