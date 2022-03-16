import { Entity, Column, CreateDateColumn, PrimaryColumn, JoinColumn, OneToOne, ManyToMany, JoinTable, OneToMany } from "typeorm";
import { v4 as uuid } from "uuid";
import { Teacher } from "./Teachers";

@Entity("class")
export class Class{
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => Teacher, (teacher) => teacher.classes)
    public teachers: Teacher[];

    @CreateDateColumn()
    create_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}