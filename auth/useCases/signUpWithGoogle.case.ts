import { User } from 'auth/entities/users'

export type SignUpWithGoogleCaseOutput = Promise<User>

export interface SignUpWithGoogleCase extends UseCase {
  execute(): SignUpWithGoogleCaseOutput
}
