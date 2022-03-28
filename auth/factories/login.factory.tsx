import LoginCaseImpl from 'auth/useCases/classes/login.caseImpl'
import SignInWithGoogleCaseImpl from 'auth/useCases/classes/signInWithGoogle.caseImpl'

import { SessionStorePort } from 'auth/ports/sessionStore.port'

import LoginPage from 'auth/components/login.page'

import FirebaseAuthAdapter from 'auth/adapters/firebaseAuth.adapter'

import React from 'react'

type Props = { sessionStore: SessionStorePort }

export default class LoginFactory
  extends React.Component<Props>
  implements Factory
{
  render() {
    const firebaseAuth = new FirebaseAuthAdapter()
    const login = new LoginCaseImpl(firebaseAuth, this.props.sessionStore)
    const signInWithGoogle = new SignInWithGoogleCaseImpl(
      firebaseAuth,
      this.props.sessionStore
    )

    return <LoginPage login={login} signInWithGoogle={signInWithGoogle} />
  }
}
