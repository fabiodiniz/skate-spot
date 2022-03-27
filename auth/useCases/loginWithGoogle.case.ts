import { User } from 'auth/entities/users'

export type LoginWithGoogleCaseOutput = Promise<User>

export interface LoginWithGoogleCase extends UseCase {
  execute(): LoginWithGoogleCaseOutput
}
