import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

export class BaseModel{
    
    @PrimaryGeneratedColumn()
    id: number;
}