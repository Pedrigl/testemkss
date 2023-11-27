import { Body, Controller, Post } from "@nestjs/common";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from "src/dto/user.dto";
import { AuthService } from "src/services/auth.service";
import { UserService } from "src/services/user.service";

@ApiTags('auth')
@Controller('auth')
export class AuthController{

    constructor(private readonly authService: AuthService,private readonly userService: UserService){}

    @Post('login')
    @ApiBody({type: CreateUserDto})
    async login(@Body() user: CreateUserDto){
        var login = await this.userService.getByLogin(user.email, user.senha);

        if(login != null){
            return await this.authService.generateToken(login);
        }
        else{
            return {
                statusCode: 401,
                message: "Usuário ou senha inválidos",
                login: login
            };
        }
    }

    @Post('register')
    @ApiBody({type: CreateUserDto})
    async register(@Body() user: CreateUserDto){
        var login = await this.userService.getByLogin(user.email, user.senha);

        if(login == null){
            return await this.userService.create(user);
        }
        else{
            return {
                statusCode: 401,
                message: "Usuário já cadastrado"
            };
        }
    }
}