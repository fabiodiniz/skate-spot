export type ReloadSessionCaseOutput = void

export interface ReloadSessionCase extends UseCase {
  execute(): ReloadSessionCaseOutput
}
