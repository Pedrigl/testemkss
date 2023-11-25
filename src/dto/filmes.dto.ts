import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { Filme } from "src/domain/entities/filmes.entity";
import { ClassificacaoIndicativa } from "src/domain/enums/classificacaoIndicativa.enum";
import { Genero } from "src/domain/enums/genero.enum";

export class CreateFilmeDto extends Filme{

    @ApiPropertyOptional()
    readonly id: number;

    @ApiProperty()
    readonly nome: string;

    @ApiProperty()
    readonly descricao: string;

    @ApiProperty()
    readonly duracao: number;

    @ApiProperty()
    readonly anoDeLancamento: number;

    @ApiProperty()
    readonly classificacaoIndicativa: ClassificacaoIndicativa;

    @ApiProperty()
    readonly genero: Genero;
}