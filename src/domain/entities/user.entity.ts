import { Column } from "typeorm";
import { BaseModel } from "./baseModel.entity";

export class User extends BaseModel{

    @Column()
    nome: string;

    @Column()
    email: string;

    @Column()
    senha: string;
}