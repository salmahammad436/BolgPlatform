import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';


async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ logger: ['log', 'debug', 'error', 'warn'] });


  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  app.enableCors();
  await app.init(); 

  if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 3000;
    await app.listen(PORT);
    console.log(`Server is running on http://localhost:${PORT}`);
  }
}


bootstrap()