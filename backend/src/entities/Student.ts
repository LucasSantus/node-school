import { Entity, Column, ManyToOne } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Class } from "./Class";

@Entity("students")
export class Student extends BaseEntity{
    @Column()
    name: string;

    @ManyToOne(() => Class, classe => classe.students)
    classe: Class;
}