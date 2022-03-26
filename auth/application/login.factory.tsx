import LoginPage from 'auth/presentation/components/login.page'

import React from 'react'

export default class LoginFactory extends React.Component implements Factory {
  render() {
    return <LoginPage />
  }
}
