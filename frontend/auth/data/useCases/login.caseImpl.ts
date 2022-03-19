import {
  LoginCase,
  LoginCaseInput,
  LoginCaseOutput,
} from 'auth/data/useCases/login.case'

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
