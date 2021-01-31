import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// import { DocumentBuilder } from '@nestjs/swagger/dist/document-builder';
// import { SwaggerModule } from '@nestjs/swagger/dist/swagger-module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.useGlobalPipes(new ValidationPipe({
    forbidNonWhitelisted: true,
    whitelist: true,
    transform: true
  }));
  app.enableCors()

  // const options = new DocumentBuilder()
  //   .setTitle('Book Api')
  //   .setDescription('This is APi to book Store')
  //   .setVersion('1.0')
  //   .addTag('books')
  //   .addTag('authors')
  //   .build();
  // const document = SwaggerModule.createDocument(app, options);
  // SwaggerModule.setup('api', app, document);
  await app.listen(8000);
}
bootstrap();
