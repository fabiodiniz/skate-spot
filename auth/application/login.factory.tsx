import LoginCaseImpl from 'auth/data/useCases/classes/login.caseImpl'
import SignInWithGoogleCaseImpl from 'auth/data/useCases/classes/signInWithGoogle.caseImpl'

import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

import LoginPage from 'auth/presentation/components/login.page'

import React from 'react'
import Container from 'typedi'

type Props = { sessionStore: SessionStorePort }

export default class LoginFactory
  extends React.Component<Props>
  implements Factory
{
  render() {
    const login = Container.get(LoginCaseImpl)
    const signInWithGoogle = Container.get(SignInWithGoogleCaseImpl)

    return <LoginPage login={login} signInWithGoogle={signInWithGoogle} />
  }
}
