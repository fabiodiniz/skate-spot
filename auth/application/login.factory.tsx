import { LoginCase } from 'auth/data/useCases/login.case'
import { SignInWithGoogleCase } from 'auth/data/useCases/signInWithGoogle.case'

import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

import LoginPage from 'auth/presentation/components/login.page'

import React from 'react'
import { container } from 'tsyringe'

type Props = { sessionStore: SessionStorePort }

export default class LoginFactory
  extends React.Component<Props>
  implements Factory
{
  render() {
    const login = container.resolve<LoginCase>('login.caseImpl')
    const signInWithGoogle = container.resolve<SignInWithGoogleCase>(
      'signInWithGoogle.caseImpl'
    )

    return <LoginPage login={login} signInWithGoogle={signInWithGoogle} />
  }
}
