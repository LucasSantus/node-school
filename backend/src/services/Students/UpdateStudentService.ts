import { getRepository } from "typeorm";
import { Student } from "../../entities/Student";

type StudentUpdateRequest = {
    id: string
    name: string;
    cpf: string;
    telefone: string;
    email: string;
}

export class UpdateStudentService{
    async execute({id, name, cpf, telefone, email}: StudentUpdateRequest){
        const repo = getRepository(Student);

        const student = await repo.findOne(id);

        if(!student){
            return new Error("Student does not exists!");
        }

        student.name = name ? name : student.name
        student.cpf = cpf ? cpf : student.cpf
        student.telefone = telefone ? telefone : student.telefone
        student.email = email ? email : student.email

        await repo.save(student);
        return student;
    }
}