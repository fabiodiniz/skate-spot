import { NestFactory } from '@nestjs/core'
import { SharedModule } from './shared/shared.module'

async function bootstrap() {
  const app = await NestFactory.create(SharedModule)
  await app.listen(process.env.PORT || 8080)
}
bootstrap()
