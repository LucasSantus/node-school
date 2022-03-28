import { getRepository } from "typeorm";
import { Teacher } from "../../entities/Teachers";

type TeacherRequest = {
    name: string;
    cpf: string;
    telefone: string;
    email: string;
    birthDate: Date;
}

export class CreateTeacherService{
    async execute({name, cpf, telefone, email, birthDate}:TeacherRequest): Promise<Teacher | Error>{
        const repo = getRepository(Teacher);

        if(await repo.findOne({name})){
            return new Error("Teacher already exists!");
        }

        const teacher = repo.create({
            name, cpf, telefone, email, birthDate
        });

        await repo.save(teacher);
        return teacher;
    }
}