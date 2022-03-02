import { Controller, Request, Post, UseGuards } from '@nestjs/common'
import { LocalAuthGuard } from './local-auth.guard'

@Controller('auth')
export class AuthenticationController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return req.user
  }
}
