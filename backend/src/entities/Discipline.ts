import { Entity, Column, JoinColumn, ManyToOne, ManyToMany, JoinTable } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Student } from "./Student";
import { Teacher } from "./Teachers";

@Entity("disciplines")
export class Discipline extends BaseEntity{
    @Column()
    title: string;

    @Column()
    description: string;

    @Column({nullable: true})
    teacher_id: string;

    @ManyToOne(type => Teacher, teacher => teacher.disciplines, { nullable: true})
    @JoinColumn({ name: 'teacher_id' })
    teacher: Teacher;

    @ManyToMany(() => Student)
    @JoinTable()
    students: Student[];
}
