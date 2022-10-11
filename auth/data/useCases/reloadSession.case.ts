export type ReloadSessionCaseOutput = Promise<void>

export interface ReloadSessionCase extends UseCase {
  execute(): ReloadSessionCaseOutput
}
