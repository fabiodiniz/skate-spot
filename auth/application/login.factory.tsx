import LoginCaseImpl from 'auth/data/useCases/classes/login.caseImpl'
import SignInWithGoogleCaseImpl from 'auth/data/useCases/classes/signInWithGoogle.caseImpl'

import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

import LoginPage from 'auth/presentation/components/login.page'

import FirebaseAuthAdapter from 'auth/infra/firebaseAuth.adapter'

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
