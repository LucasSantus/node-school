import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateClass1647390591847 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'class',
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
                        type: "uuid" 
                    },
                    { 
                        name: "student_id", 
                        type: "uuid" 
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
                        name: "fk_teacher_class",
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE",
                    },
                    {
                        columnNames: ["student_id"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "students",
                        name: "fk_student_class",
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE",
                    },
                ],
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("class");
    }
}
