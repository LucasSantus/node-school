import { getRepository } from "typeorm";
import { Teacher } from "../../entities/Teachers";

export class DeleteTeacherService{
    async execute(id: string){
        const repo = getRepository(Teacher);

        if(!await repo.findOne(id)){
            return new Error("Teacher does not exists!");
        }  
         
        await repo.delete(id);
    }
}