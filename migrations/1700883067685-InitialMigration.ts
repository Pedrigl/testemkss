import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class InitialMigration1700883067685 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "filmes",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                    isGenerated: true
                },
                {
                    name: "nome",
                    type: "varchar",
                    length: "255"
                },
                {
                    name: "descricao",
                    type: "varchar",
                    length: "255"
                },
                {
                    name: "duracao",
                    type: "int"
                },
                {
                    name: "classificacaoIndicativa",
                    type: "enum",
                    enum: [
                        "LIVRE",
                        "10",
                        "12",
                        "14",
                        "16",
                        "18"
                    ]
                },
                {
                    name: "genero",
                    type: "enum",
                    enum: [
                        "Ação",
                        "Aventura",
                        "Comédia",
                        "Drama",
                        "Fantasia",
                        "Ficção científica",
                        "Musical",
                        "Romance",
                        "Suspense",
                        "Terror"
                    ]
                },
                {
                    name: "anoDeLancamento",
                    type: "int"
                }
            ]
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("filmes");
    }

}
