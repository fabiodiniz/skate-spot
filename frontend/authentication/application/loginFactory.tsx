import React from 'react'
import IFactory from '../../shared/application/iFactory'
import LoginPage from '../presentation/components/LoginPage'

export default class LoginFactory extends React.Component implements IFactory {
  render() {
    return <LoginPage></LoginPage>
  }
}
