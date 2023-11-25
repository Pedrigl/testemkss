import { Injectable } from "@nestjs/common";
import { Filme } from "../domain/entities/filmes.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class FilmeService{
    constructor(
        @InjectRepository(Filme)
        private readonly filmeRepository: Repository<Filme>
    ){}

    async getAll(): Promise<Filme[]>{
        return await this.filmeRepository.find();
    }

    async getById(id: number): Promise<Filme>{
        return await this.filmeRepository.findOne({
            where: { id: id }
        });
    }

    async create(filme: Filme){
        await this.filmeRepository.save(filme);
    }

    async update(id: number, filme: Filme){
        await this.filmeRepository.update(id, filme);
    }

    async delete(id: number){
        await this.filmeRepository.delete(id);
    }
}