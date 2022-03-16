import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { Class } from "./Class";

@Entity("teachers")
export class Teacher{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @ManyToOne(() => Class, (classe) => classe.teachers)
    public classes: Class;

    @CreateDateColumn()
    create_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}