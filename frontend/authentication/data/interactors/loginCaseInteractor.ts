import {
  LoginCaseInput,
  ILoginCase,
  LoginCaseOutput,
} from '../../domain/useCases/iLoginCase'

export class LoginCaseInteractor implements ILoginCase {
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
