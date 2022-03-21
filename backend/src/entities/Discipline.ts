import { Entity, Column, JoinColumn, ManyToOne, OneToMany, ManyToMany, JoinTable } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Student } from "./Student";
import { Teacher } from "./Teachers";

@Entity("disciplines")
export class Discipline extends BaseEntity{
    @Column()
    name: string;

    @Column()
    description: string;

    @Column({nullable: true})
    teacher_id: string;

    @ManyToOne(type => Teacher, teacher => teacher.disciplines, { nullable: true})
    @JoinColumn({ name: 'teacher_id' })
    teacher: Teacher;

    // @OneToMany(type => Student, discipline => Discipline, { nullable: true})
    // @OneToMany(type => Student, student => student.discipline)
    // students: Student[];

    @ManyToMany(() => Student)
    @JoinTable()
    students: Student[];
}
