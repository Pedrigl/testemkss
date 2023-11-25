import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export class BaseModel{
    
    @PrimaryGeneratedColumn('identity', {generatedIdentity: 'ALWAYS'})
    id: number;
}