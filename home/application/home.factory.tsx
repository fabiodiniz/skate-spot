import LogoutCaseImpl from 'auth/data/useCases/classes/logout.caseImpl'

import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

import HomePage from 'home/presentation/components/home.page'

import FirebaseAuthAdapter from 'auth/infra/firebaseAuth.adapter'

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
