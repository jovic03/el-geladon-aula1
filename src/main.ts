import { NestFactory } from '@nestjs/core';
import {PaletaModule} from './Paleta.module'

async function bootstrap() {
  const app = await NestFactory.create(PaletaModule);
  await app.listen(3000);
}
bootstrap();
