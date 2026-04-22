/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { access } from 'node:fs/promises';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );

  console.log(`\nTEST if Directory exists`);
  console.log(`${__dirname}: ${await pathExists(__dirname)}`);
  console.log(`${__dirname + '/'}: ${await pathExists(__dirname + '/')}`);
}

async function pathExists(path: string) {
  try {
    await access(path);
    return true;
  } catch (e) {
    console.log(`ERROR: ${e}`);
    return false;
  }
}

bootstrap();
