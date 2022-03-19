import { UseCase } from 'types'
import { Session } from '../entities'

type LoginCaseInput = {
  email: string
  password: string
}

type LoginCaseOutput = Promise<Session>

interface LoginCase extends UseCase {
  execute(params: LoginCaseInput): LoginCaseOutput
}
