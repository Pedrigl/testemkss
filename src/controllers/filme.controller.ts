import {Controller, Get, Post, Body, Param, Delete} from '@nestjs/common';
import { FilmeService } from '../services/filme.service';
import { Filme } from '../domain/entities/filmes.entity';

@Controller('filmes')
export class FilmeController{

    constructor(
        private readonly filmeService: FilmeService
    ){}

    @Get()
    async getAll(): Promise<Filme[]>{
        return await this.filmeService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: number): Promise<Filme>{
        return await this.filmeService.getById(id);
    }

    @Post()
    async create(@Body() filme: Filme){
        await this.filmeService.create(filme);
    }

    @Post(':id')
    async update(@Param('id') id: number, @Body() filme: Filme){
        await this.filmeService.update(id, filme);
    }

    @Delete(':id')
    async delete(@Param('id') id: number){
        await this.filmeService.delete(id);
    }
}