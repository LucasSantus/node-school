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
                        name: "name", 
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
                        name: "student_id", 
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
                        onDelete: "RESTRICT", 
                        onUpdate: "CASCADE" 
                    },
                    { 
                        columnNames: ["student_id"], 
                        referencedColumnNames: ["id"], 
                        referencedTableName: "students", 
                        name: "fk_discipline_students", 
                        onDelete: "RESTRICT", 
                        onUpdate: "CASCADE" 
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("class");
    }
}
