import { Session } from '../../domain/entities/session'

export type LoginCaseInput = {
  email: string
  password: string
}

export type LoginCaseOutput = Promise<Session>

export interface LoginCase extends UseCase {
  execute(params: LoginCaseInput): LoginCaseOutput
}
