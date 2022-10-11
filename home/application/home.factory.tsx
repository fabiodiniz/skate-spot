import LogoutCaseImpl from 'auth/data/useCases/classes/logout.caseImpl'

import { SessionStorePort } from 'auth/data/ports/sessionStore.port'

import HomePage from 'home/presentation/components/home.page'

import React from 'react'
import { container } from 'tsyringe'

type Props = { sessionStore: SessionStorePort }

export default class HomeFactory
  extends React.Component<Props>
  implements Factory
{
  render() {
    const logout = container.resolve<LogoutCaseImpl>('logout.caseImpl')

    return <HomePage logout={logout} />
  }
}
