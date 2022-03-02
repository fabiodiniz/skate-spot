import UseCase from '../shared/domain/useCase'

type UseCases = {
  [k: string]: UseCase
}

interface Factory {
  useCases?: UseCases
  render: () => JSX.Element
}

interface Factory {
  useCases?: UseCases
  render: () => JSX.Element
}

interface UseCase {
  execute(params: unknown): unknown
}
