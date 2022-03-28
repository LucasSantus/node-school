import { getRepository } from "typeorm";
import { Student } from "../../entities/Student";

type StudentRequest = {
    name: string;
    cpf: string;
    telefone: string;
    email: string;
    birthDate: Date;
}

export class CreateStudentService{
    async execute({name, cpf, telefone, email, birthDate}:StudentRequest): Promise<Student | Error>{
        const repo = getRepository(Student);

        if(await repo.findOne({name})){
            return new Error("Student already exists!");
        }

        const student = repo.create({
            name, cpf, telefone, email, birthDate
        });

        await repo.save(student);

        return student;
    }
}