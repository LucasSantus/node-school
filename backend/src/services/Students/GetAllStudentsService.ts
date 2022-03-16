import { getRepository } from "typeorm";
import { Student } from "../../entities/Student";

export class GetAllStudentsService{
    async execute(){
        const repo = getRepository(Student);
        const students = await repo.find();
        
        return students;
    }
}