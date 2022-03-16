import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Student } from "./Student";

@Entity("class")
export class Class{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    student_id: string;

    @Column()
    teacher_id: string;

    @OneToMany(() => Student)
    @JoinColumn({name: "student_id"})
    student: Student;

    // @ManyToOne(() => Teacher)
    // @JoinColumn({name: "teacher_id"})
    // teacher: Teacher;

    @CreateDateColumn()
    create_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}