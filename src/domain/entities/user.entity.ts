import { Column, Entity } from "typeorm";
import { BaseModel } from "./baseModel.entity";

@Entity()
export class User extends BaseModel{

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;
}