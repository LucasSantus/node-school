import { Entity, Column, OneToMany, JoinTable, JoinColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Discipline } from "./Discipline";

@Entity("teachers")
export class Teacher extends BaseEntity{
    @Column()
    name: string;

    @OneToMany(type => Discipline, disciplines => disciplines.teacher)
    disciplines: Discipline[];  
}