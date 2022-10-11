import Adapters from 'shared/application/adapters'
import UseCases from 'shared/application/useCases'
import { registry, singleton } from 'tsyringe'

@singleton()
@registry([...Adapters, ...UseCases])
export default class DependencyInjector {}
