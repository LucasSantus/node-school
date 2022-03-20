import { Entity, Column, ManyToOne, JoinTable, JoinColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Class } from "./Class";

@Entity("students")
export class Student extends BaseEntity{
    @Column()
    name: string;

    @Column({nullable: true})
    classe_id: string;

    @ManyToOne(type => Class, students => students.id, { eager: true, nullable: true})
    @JoinColumn({name: "classe_id"})
    classe: Class;
}