import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { ClassificacaoIndicativa } from '../enums/classificacaoIndicativa.enum';
import { BaseModel } from './baseModel.entity';
import { isString } from 'class-validator';
import { Genero } from '../enums/genero.enum';

@Entity()
export class Filme extends BaseModel{

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    duracao: number;

    @Column()
    anoDeLancamento: Date;

    @Column()
    classificacaoIndicativa: ClassificacaoIndicativa;

    @Column()
    genero: Genero;


}