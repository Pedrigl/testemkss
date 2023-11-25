import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { TypeOrmModule } from '@nestjs/typeorm';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('API')
  .setDescription('TesteMKSS')
  .setVersion('1.0')
  .build();

  const document =  SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app,document);

  const typeOrmOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'seu-usuario',
    password: 'sua-senha',
    database: 'nome-do-banco',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  };
  await app.listen(3000);
}
bootstrap();
