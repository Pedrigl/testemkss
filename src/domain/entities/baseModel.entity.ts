import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

export class BaseModel{
    
    @PrimaryGeneratedColumn('identity', {generatedIdentity: 'ALWAYS'})
    id: number;
}