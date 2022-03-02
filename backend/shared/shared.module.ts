import { Module } from '@nestjs/common'
import { SharedController } from './shared.controller'
import { SharedService } from './shared.service'
import { UsersModule } from 'users/users.module'
import { AuthenticationModule } from 'authentication/authentication.module'

@Module({
  imports: [AuthenticationModule, UsersModule],
  controllers: [SharedController],
  providers: [SharedService],
})
export class SharedModule {}
