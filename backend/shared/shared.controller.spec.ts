import { Test, TestingModule } from '@nestjs/testing'
import { SharedController } from './shared.controller'
import { SharedService } from './shared.service'

describe('AppController', () => {
  let appController: SharedController

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [SharedController],
      providers: [SharedService],
    }).compile()

    appController = app.get<SharedController>(SharedController)
  })

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!')
    })
  })
})
