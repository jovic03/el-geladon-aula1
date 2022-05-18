import { NestFactory } from '@nestjs/core';//teste de branch(github stuff not code)
import {PaletasModule} from './paletas/paletas.module'

async function bootstrap() {
  const app = await NestFactory.create(PaletasModule);
  await app.listen(3000);
}
bootstrap();
