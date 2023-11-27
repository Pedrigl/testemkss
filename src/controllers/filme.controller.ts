import {Controller, Get, Post, Body, Param, Delete, UseGuards} from '@nestjs/common';
import { FilmeService } from '../services/filme.service';
import { Filme } from '../domain/entities/filmes.entity';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { CreateFilmeDto } from 'src/dto/filmes.dto';
import { Public } from 'src/decorators/public.decorator';
import { AuthGuard } from '../auth.guard';

@ApiTags('filmes')
@Controller('filmes')
export class FilmeController{

    constructor(
        private readonly filmeService: FilmeService
    ){}

    @UseGuards(AuthGuard)
    @Get()
    async getAll(): Promise<Filme[]>{
        return await this.filmeService.getAll();
    }

    @UseGuards(AuthGuard)
    @Get(':id')
    async getById(@Param('id') id: number): Promise<Filme>{
        return await this.filmeService.getById(id);
    }

    @UseGuards(AuthGuard)
    @Post()
    @ApiBody({type: CreateFilmeDto})
    async create(@Body() filme: CreateFilmeDto){
        await this.filmeService.create(filme);
    }

    @UseGuards(AuthGuard)
    @Post(':id')
    @ApiBody({type: CreateFilmeDto})
    async update(@Param('id') id: number, @Body() filme: CreateFilmeDto){
        await this.filmeService.update(id, filme);
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async delete(@Param('id') id: number){
        await this.filmeService.delete(id);
    }
}