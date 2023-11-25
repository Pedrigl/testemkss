import { Module } from '@nestjs/common';
import { FilmeController } from 'src/controllers/filme.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from 'nestjs-redis';
import { FilmeService } from 'src/services/filme.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(),
    RedisModule.register({
        url: process.env.REDIS_URL,
    }),

  ],
  controllers: [FilmeController],
  providers: [FilmeService],
})
export class AppModule {}