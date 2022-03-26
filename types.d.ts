interface Factory {
  render: () => JSX.Element
}

interface UseCase {
  execute(params: unknown): unknown
}

type UseCases = {
  [k: string]: UseCase
}
