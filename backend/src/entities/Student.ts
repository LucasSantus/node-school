import { Entity, Column, ManyToOne, JoinColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Discipline } from "./Discipline";

@Entity("students")
export class Student extends BaseEntity{
    @Column()
    name: string;
}