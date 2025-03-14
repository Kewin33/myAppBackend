import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';
import { AuthGuard } from './guard/auth.guard';

const server = express();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
  //app.useGlobalGuards(new AuthGuard());
  await app.init();
  if (process.env.NODE_ENV !== 'production') {
    await app.listen(process.env.PORT || 3000);
  }

}
bootstrap();

export default server;
