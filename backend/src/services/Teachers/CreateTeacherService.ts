import { getRepository } from "typeorm";
import { Teacher } from "../../entities/Teachers";

type TeacherRequest = {
    name: string;
    cpf: string;
    phone: string;
    email: string;
}

export class CreateTeacherService{
    async execute({name, cpf, phone, email}:TeacherRequest): Promise<Teacher | Error>{
        const repo = getRepository(Teacher);

        if(await repo.findOne({name})){
            return new Error("Teacher already exists!");
        }

        const teacher = repo.create({
            name, cpf, phone, email
        });

        await repo.save(teacher);
        return teacher;
    }
}