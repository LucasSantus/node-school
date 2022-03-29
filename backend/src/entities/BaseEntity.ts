import { CreateDateColumn, PrimaryColumn, Column } from "typeorm";
import { v4 as uuid } from "uuid";

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

export class BaseSTEntity extends BaseEntity{
    @Column()
    cpf: string;

    @Column()
    email: string;

    @Column()
    telefone: string;
}