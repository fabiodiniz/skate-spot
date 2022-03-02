import { NestFactory } from '@nestjs/core'
import { SharedModule } from './shared/shared.module'

async function bootstrap() {
  const app = await NestFactory.create(SharedModule)
  await app.listen(3000)
}
bootstrap()
