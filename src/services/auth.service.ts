import { Injectable, HttpException, HttpStatus } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/domain/entities/user.entity";
import { Repository } from "typeorm";
import { UserService } from "./user.service";

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
    ) { }

    async generateToken(user: User) {
        const payload = { email: user.email };
        return {
            access_token: this.jwtService.sign({email: user.email},{secret: process.env.JWT_SECRET, expiresIn: process.env.JWT_EXPIRES_IN}),
        };
    }

    async validateToken(token: string): Promise<boolean> {
        try {
            console.log(token);
            const decoded = this.jwtService.verify(token);
            console.log(decoded);
            return true;
        } catch (error) {
            return false;
        }
    }
}