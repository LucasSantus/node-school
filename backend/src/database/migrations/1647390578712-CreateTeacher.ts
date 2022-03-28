import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTeachers1647390578712 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'teachers',
                columns: [
                   { 
                        name: "id", 
                        type: "uuid", 
                        isPrimary: true 
                    },
                    {
                        name: "name", 
                        type: "varchar", 
                        isUnique: true 
                    },
                    {
                        name: "cpf", 
                        type: "varchar", 
                        isUnique: true
                    },
                    {
                        name: "telefone", 
                        type: "varchar", 
                        isUnique: true
                    },
                    {
                        name: "email", 
                        type: "varchar", 
                        isUnique: true
                    },
                    {
                        name: "birthDate", 
                        type: "timestamp"
                    },
                    {
                        name: "update_at", 
                        type: "timestamp",
                        isNullable: true
                    },
                    { 
                        name: "create_at", 
                        type: "timestamp", 
                        default: "now()" 
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("teachers");
    }
}
