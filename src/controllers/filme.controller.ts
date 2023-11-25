import {Controller, Get, Post, Body, Param, Delete} from '@nestjs/common';
import { FilmeService } from '../services/filme.service';
import { Filme } from '../domain/entities/filmes.entity';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateFilmeDto } from 'src/dto/filmes.dto';

@ApiTags('filmes')
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
    @ApiBody({type: CreateFilmeDto})
    async create(@Body() filme: CreateFilmeDto){
        await this.filmeService.create(filme);
    }

    @Post(':id')
    @ApiBody({type: CreateFilmeDto})
    async update(@Param('id') id: number, @Body() filme: CreateFilmeDto){
        await this.filmeService.update(id, filme);
    }

    @Delete(':id')
    async delete(@Param('id') id: number){
        await this.filmeService.delete(id);
    }
}