import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { User } from "src/domain/entities/user.entity";


export class CreateUserDto extends User {

        @ApiPropertyOptional()
        readonly id: number;
    
        @ApiProperty()
        readonly nome: string;

        @ApiProperty()
        readonly email: string;
    
        @ApiProperty()
        readonly senha: string;
}
