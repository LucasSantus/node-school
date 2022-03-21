import { getRepository } from "typeorm";
import { Teacher } from "../../entities/Teachers";

type TeacherRequest = {
    first_name: string;
    last_name: string;
    email: string;
}

export class CreateTeacherService{
    async execute({first_name, last_name, email}:TeacherRequest): Promise<Teacher | Error>{
        const repo = getRepository(Teacher);

        if(await repo.findOne({first_name})){
            return new Error("Teacher already exists!");
        }

        const teacher = repo.create({
            first_name, last_name, email
        });

        await repo.save(teacher);
        return teacher;
    }
}