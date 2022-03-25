import { getRepository } from "typeorm";
import { Student } from "../../entities/Student";

export class GetStudentService{
    async execute(id: string){
        const repo = getRepository(Student);

        const student = await repo.findOne(id);

        return student;
    }
}