import IUseCase from '../../../shared/domain/iUseCases'
import { Session } from '../entities'

export type LoginCaseInput = {
  email: string
  password: string
}

export type LoginCaseOutput = Promise<Session>

export interface ILoginCase extends IUseCase {
  execute(params: LoginCaseInput): LoginCaseOutput
}
