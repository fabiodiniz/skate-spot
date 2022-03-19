import { LoginCaseInput, LoginCase, LoginCaseOutput } from './login.case'

export default class LoginCaseImpl implements LoginCase {
  async execute(params: LoginCaseInput): LoginCaseOutput {
    console.log(params)

    return {
      user: {
        uid: 1,
        email: 'name@domain.com',
      },
      token: 'token',
    }
  }
}
