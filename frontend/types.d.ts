interface Factory {
  useCases?: UseCases
  render: () => JSX.Element
}

interface UseCase {
  execute(params: unknown): unknown
}

type UseCases = {
  [k: string]: UseCase
}
