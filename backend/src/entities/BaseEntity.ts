import { Entity, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("class")
export class BaseEntity{
    @PrimaryColumn()
    id: string;

    @CreateDateColumn()
    create_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}