import LogoutCaseImpl from 'auth/useCases/classes/logout.caseImpl'

import { SessionStorePort } from 'auth/ports/sessionStore.port'

import HomePage from 'home/components/home.page'

import FirebaseAuthAdapter from 'auth/adapters/firebaseAuth.adapter'

import React from 'react'

type Props = { sessionStore: SessionStorePort }

export default class HomeFactory
  extends React.Component<Props>
  implements Factory
{
  render() {
    const logout = new LogoutCaseImpl(
      new FirebaseAuthAdapter(),
      this.props.sessionStore
    )

    return <HomePage logout={logout} />
  }
}
