import { Entity, Column, OneToMany } from "typeorm";
import { BaseSTEntity } from "./BaseEntity";
import { Discipline } from "./Discipline";

@Entity("teachers")
export class Teacher extends BaseSTEntity{
    @Column()
    name: string;

    @OneToMany(type => Discipline, disciplines => disciplines.teacher)
    disciplines: Discipline[];  
}