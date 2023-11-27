import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthController } from 'src/controllers/auth.controller';
import { AuthService } from 'src/services/auth.service';
import { UserService } from 'src/services/user.service';
import { UserModule } from './users.module';
import { AuthGuard } from '../auth.guard';

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.JWT_SECRET,
            signOptions: { expiresIn: process.env.JWT_EXPIRES_IN },
        }),
        UserModule

    ],
    controllers: [AuthController],
    providers: [AuthService, JwtService],
    exports: [AuthGuard]
})
export class AuthModule {}
