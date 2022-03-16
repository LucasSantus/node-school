import { Entity, Column, OneToMany } from "typeorm";
import { BaseEntity } from "./BaseEntity";
import { Class } from "./Class";

@Entity("teachers")
export class Teacher extends BaseEntity{
    @Column()
    name: string;

    @OneToMany(type => Class, classes => classes.teacher)
    classes: Class[];  
}