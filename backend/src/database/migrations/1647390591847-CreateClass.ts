import {MigrationInterface, QueryRunner, Table} from "typeorm";

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
                        name: "student_id",
                        type: "uuid",
                    },
                    {
                        name: "teacher_id",
                        type: "uuid",
                    },
                    {
                        name: "create_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
                foreignKeys: [
                    {
                        name: "fk_class_student",
                        columnNames: ['student_id'],
                        referencedTableName: 'students',
                        referencedColumnNames: ['id']
                    },
                    {
                        name: "fk_class_teacher",
                        columnNames: ['teacher_id'],
                        referencedTableName: 'teachers',
                        referencedColumnNames: ['id']
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("videos");
    }
}
