import { getRepository } from "typeorm";
import { Teacher } from "../../entities/Teachers";

type TeacherUpdateRequest = {
    id: string
    name: string;
    cpf: string;
    telefone: string;
    email: string;
}

export class UpdateTeacherService{
    async execute({id, name, cpf, telefone, email}: TeacherUpdateRequest){
        const repo = getRepository(Teacher);

        const teacher = await repo.findOne(id);

        if(!teacher){
            return new Error("Teacher does not exists!");
        }

        teacher.name = name ? name : teacher.name
        teacher.cpf = cpf ? cpf : teacher.cpf
        teacher.telefone = telefone ? telefone : teacher.telefone
        teacher.email = email ? email : teacher.email

        await repo.save(teacher);
        return teacher;
    }
}