import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/domain/entities/user.entity";
import { UserService } from "src/services/user.service";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserService]
})

export class UserModule{}