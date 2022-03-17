import { Entity, Column, ManyToOne, JoinTable } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Class } from "./Class";

@Entity("students")
export class Student extends BaseEntity{
    @Column()
    name: string;

    @ManyToOne(() => Class, classe => classe.students)
    @JoinTable({
        name: "class",
        joinColumns: [{ name: "student_id" }],
        inverseJoinColumns: [{ name: "id" }],
    })
    classe!: Class;
}