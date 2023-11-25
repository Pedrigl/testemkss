import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'
import { ClassificacaoIndicativa } from '../enums/classificacaoIndicativa.enum';
import { BaseModel } from './baseModel.entity';

@Entity()
export class Filme extends BaseModel{

    @Column()
    nome: string;

    @Column()
    descricao: string;

    @Column()
    anoDeLancamento: Date;

    @Column()
    classificacaoIndicativa: ClassificacaoIndicativa;

}