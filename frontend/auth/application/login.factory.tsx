import React from 'react'
import LoginPage from '../presentation/components/login.page'

export default class LoginFactory extends React.Component implements Factory {
  render() {
    return <LoginPage />
  }
}
