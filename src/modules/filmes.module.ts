import { Module } from "@nestjs/common";
import { FilmeController } from "../controllers/filme.controller";
import { FilmeService } from "../services/filme.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Filme } from "../domain/entities/filmes.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Filme])
    ],
    controllers: [FilmeController],
    providers: [FilmeService]
})

export class FilmeModule{}