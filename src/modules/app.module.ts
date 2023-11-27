import { Module } from '@nestjs/common';
import { FilmeController } from 'src/controllers/filme.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmeService } from 'src/services/filme.service';
import { Filme } from 'src/domain/entities/filmes.entity';
import { typeOrmConfig} from 'typeOrm.config';
import { User } from 'src/domain/entities/user.entity';
import { UserService } from 'src/services/user.service';
import { AuthController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthGuard } from 'src/auth.guard';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([Filme, User])
  ],
  controllers: [FilmeController, AuthController],
  providers: [FilmeService, UserService, JwtService, AuthService, AuthGuard],
  exports: [AuthGuard]
})
export class AppModule {}
