import { Entity, Column, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Student } from "./Student";
import { Teacher } from "./Teachers";

@Entity("class")
export class Class extends BaseEntity{
    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(type => Teacher, teacher => teacher.classes)
    @JoinColumn({ name: 'teacher_id' })
    teacher: Teacher;

    @OneToMany(type => Student, classe => Class)
    @JoinColumn({ name: 'student_id' })
    students: Student[];
}