import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateDiscipline1647390591847 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'disciplines',
                columns: [
                    { 
                        name: "id", 
                        type: "uuid", 
                        isPrimary: true
                    },
                    { 
                        name: "title", 
                        type: "varchar", 
                        isUnique: true 
                    },
                    { 
                        name: "description", 
                        type: "varchar" 
                    },
                    { 
                        name: "teacher_id", 
                        type: "uuid",
                        isNullable: true
                    },
                    { 
                        name: "create_at", 
                        type: "timestamp", 
                        default: "now()" 
                    },
                ],
                foreignKeys: [
                    { 
                        columnNames: ["teacher_id"], 
                        referencedColumnNames: ["id"], 
                        referencedTableName: "teachers", 
                        name: "fk_discipline_teacher", 
                        onUpdate: "CASCADE",
                        onDelete: "CASCADE"
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("disciplines");
    }
}
