import { Controller, Get } from '@nestjs/common'
import { SharedService } from './shared.service'

@Controller()
export class SharedController {
  constructor(private readonly appService: SharedService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello()
  }
}
