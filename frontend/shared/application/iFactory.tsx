import IUseCase from '../domain/iUseCases'

type UseCases = {
  [k: string]: IUseCase
}

export default interface IFactory {
  useCases?: UseCases
  render: () => JSX.Element
}
