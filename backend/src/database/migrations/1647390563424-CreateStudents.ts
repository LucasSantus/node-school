import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class CreateStudents1647390563424 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'students',
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
                        name: "create_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ],
            })
        ),

        await queryRunner.addColumn(
            "students",
            new TableColumn({
                name: "classe_id",
                type: "varchar",
                isUnique: true
            }),
        )

        await queryRunner.createForeignKey(
            "students",
            new TableForeignKey({
                name: "fk_students_class",
                columnNames: ['classe_id'],
                referencedTableName: 'class',
                referencedColumnNames: ['id'],
                onDelete: "RESTRICT",
                onUpdate: "CASCADE",
            }),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("students");
    }
}
