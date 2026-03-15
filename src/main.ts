import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const PORT = 3000;
const HOST = '127.0.0.1';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(PORT, HOST, () => {
    console.log(`Server started on port ${PORT}`);
  });
}
void bootstrap();
