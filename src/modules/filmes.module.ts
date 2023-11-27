import { Module } from "@nestjs/common";
import { FilmeController } from "../controllers/filme.controller";
import { FilmeService } from "../services/filme.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Filme } from "../domain/entities/filmes.entity";
import { AuthModule } from "./auth.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([Filme]),
        AuthModule
    ],
    controllers: [FilmeController],
    providers: [FilmeService]
})

export class FilmeModule{}