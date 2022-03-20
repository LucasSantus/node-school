import { getRepository } from "typeorm";
import { Student } from "../../entities/Student";

type StudentRequest = {
    name: string;
}

export class CreateStudentService{
    async execute({name}:StudentRequest): Promise<Student | Error>{
        const repo = getRepository(Student);

        if(await repo.findOne({name})){
            return new Error("Student already exists!");
        }

        const student = repo.create({
            name
        });

        await repo.save(student);
        return student;
    }
}