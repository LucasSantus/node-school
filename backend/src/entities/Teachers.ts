import { Entity, Column, OneToMany, JoinTable, JoinColumn } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Discipline } from "./Discipline";

@Entity("teachers")
export class Teacher extends BaseEntity{
    @Column()
    first_name: string;

    @Column()
    last_name: string;

    @Column()
    email: string;

    @OneToMany(type => Discipline, disciplines => disciplines.teacher)
    disciplines: Discipline[];  
}