import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('AI Signal Analysis API')
    .setDescription('The API documentation for the AI Signal Analysis platform')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
    
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, documentFactory);
  app.enableCors({
    origin: 'https://phal.digital-teachers.com',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
