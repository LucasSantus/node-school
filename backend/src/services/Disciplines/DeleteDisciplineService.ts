import { getRepository } from "typeorm";
import { Discipline } from "../../entities/Discipline";

export class DeleteDisciplineService{
    async execute(id: string){
        const repo = getRepository(Discipline);

        if(!await repo.findOne(id)){
            return new Error("Discipline does not exists!");
        }  
         
        await repo.delete(id);
    }
}