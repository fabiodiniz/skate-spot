export type LogoutCaseOutput = Promise<boolean>

export interface LogoutCase extends UseCase {
  execute(): LogoutCaseOutput
}
