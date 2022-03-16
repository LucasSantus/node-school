import { getRepository } from "typeorm";
import { Student } from "../../entities/Student";

export class DeleteStudentService{
    async execute(id: string){
        const repo = getRepository(Student);

        if(!await repo.findOne(id)){
            return new Error("Student does not exists!");
        }  
         
        await repo.delete(id);
    }
}