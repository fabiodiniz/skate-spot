import { User } from 'auth/domain/entities/users'

export type LoginCaseInput = {
  email: string
  password: string
}

export type LoginCaseOutput = Promise<User>

export interface LoginCase extends UseCase {
  isValid(params: LoginCaseInput): boolean
  execute(params: LoginCaseInput): LoginCaseOutput
}
