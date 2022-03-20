import { getRepository } from "typeorm";
import { Class } from "../../entities/Class";

export class DeleteClassService{
    async execute(id: string){
        const repo = getRepository(Class);

        if(!await repo.findOne(id)){
            return new Error("Class does not exists!");
        }  
         
        await repo.delete(id);
    }
}