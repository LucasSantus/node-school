import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class RelationStudents1647390591847 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            "students",
            new TableColumn(
                { 
                    name: "discipline_id", 
                    type: "uuid", 
                    isUnique: true,
                    isNullable: true
                }
            ),
        )

        await queryRunner.createForeignKey(
            "students",
            new TableForeignKey(
                { 
                    name: "fk_students_disciplines", 
                    columnNames: ['discipline_id'], 
                    referencedTableName: 'disciplines', 
                    referencedColumnNames: ['id'], 
                    onDelete: "RESTRICT", 
                    onUpdate: "CASCADE" 
                }
            ),
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }
}
