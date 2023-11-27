import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/domain/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User) 
        private readonly userRepository: Repository<User>
        ){}

    async getById(id: number): Promise<User>{
        return await this.userRepository.findOne({
            where: { id: id }
        });
        }

    async getByLogin(email: string, senha: string): Promise<User>{
        return await this.userRepository.findOne({
            where: { email: email, senha: senha }
        });
    }
    async create(user: User){
        return await this.userRepository.save(user);
    }

    async update(id: number, user: User){
        return await this.userRepository.update(id, user);
    }

    async delete(id: number){
        return await this.userRepository.delete(id);
    }
}