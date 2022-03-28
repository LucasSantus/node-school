import { Column, Entity } from "typeorm";
import { BaseSTEntity } from "./BaseEntity";

@Entity("students")
export class Student extends BaseSTEntity{
    @Column()
    name: string;
}