import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class RelationDisciplineStudent1647872297339 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'disciplines_students_students',
                columns: [
                    { 
                        name: "disciplinesId", 
                        type: "uuid",
                    },
                    { 
                        name: "studentsId", 
                        type: "uuid",
                    },
                ],
                foreignKeys: [
                    { 
                        columnNames: ["disciplinesId"], 
                        referencedColumnNames: ["id"], 
                        referencedTableName: "disciplines", 
                        name: "fk_discipline_discipline", 
                        onDelete: "RESTRICT", 
                        onUpdate: "CASCADE" 
                    },
                    { 
                        columnNames: ["studentsId"], 
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
        await queryRunner.dropTable("disciplines_students_students");
    }

}
