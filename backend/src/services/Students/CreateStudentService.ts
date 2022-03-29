import { getRepository } from "typeorm";
import { Student } from "../../entities/Student";

type StudentRequest = {
    name: string;
    cpf: string;
    telefone: string;
    email: string;
}

export class CreateStudentService{
    async execute({name, cpf, telefone, email}:StudentRequest): Promise<Student | Error>{
        const repo = getRepository(Student);

        if(await repo.findOne({name})){
            return new Error("Student already exists!");
        }

        const student = repo.create({
            name, cpf, telefone, email
        });

        await repo.save(student);

        return student;
    }
}