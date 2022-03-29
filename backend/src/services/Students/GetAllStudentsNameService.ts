import { getRepository } from "typeorm";
import { Student } from "../../entities/Student";

type StudentNameRequest = {
    name: string[];
}

export class GetAllStudentsNameService{
    async execute({name}: StudentNameRequest){  
        const repo = getRepository(Student);
        const students = await repo.find();
        
        return students;
    }
}