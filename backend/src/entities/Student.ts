import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Discipline } from "./Discipline";

@Entity("students")
export class Student extends BaseEntity{
    @Column()
    name: string;

    @Column({nullable: true})
    discipline_id: string;

    @ManyToOne(type => Discipline, students => students.id, { eager: true, nullable: false})
    @JoinColumn({name: "discipline_id"})
    discipline: Discipline;
}