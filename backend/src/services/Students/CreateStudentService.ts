import { getRepository } from "typeorm";
import { Student } from "../../entities/Student";

type StudentRequest = {
    first_name: string;
    last_name: string;
    email: string;
}

export class CreateStudentService{
    async execute({first_name, last_name, email}:StudentRequest): Promise<Student | Error>{
        const repo = getRepository(Student);

        if(await repo.findOne({first_name})){
            return new Error("Student already exists!");
        }

        const student = repo.create({
            first_name, last_name, email
        });

        await repo.save(student);

        return student;
    }
}