import LoginCaseImpl from 'auth/useCases/classes/login.caseImpl'
import LoginWithGoogleCaseImpl from 'auth/useCases/classes/loginWithGoogle.caseImpl'
import SignUpWithGoogleCaseImpl from 'auth/useCases/classes/signUpWithGoogle.caseImpl'

import LoginPage from 'auth/components/login.page'

import firebaseAuthAdapter from 'auth/adapters/firebaseAuth.adapter'

import React from 'react'

export default class LoginFactory extends React.Component implements Factory {
  render() {
    const firebaseAuth = new firebaseAuthAdapter()
    const login = new LoginCaseImpl(firebaseAuth)
    const loginWithGoogle = new LoginWithGoogleCaseImpl(firebaseAuth)
    const signUpWithGoogle = new SignUpWithGoogleCaseImpl(firebaseAuth)

    return (
      <LoginPage
        login={login}
        loginWithGoogle={loginWithGoogle}
        signUpWithGoogle={signUpWithGoogle}
      />
    )
  }
}
