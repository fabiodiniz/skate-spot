import { User } from 'auth/domain/entities/users'

export type SignInWithGoogleCaseOutput = Promise<User>

export interface SignInWithGoogleCase extends UseCase {
  execute(): SignInWithGoogleCaseOutput
}
