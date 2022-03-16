import { getRepository } from "typeorm";
import { Teacher } from "../../entities/Teachers";

type TeacherRequest = {
    name: string;
}

export class CreateTeacherService{
    async execute({name}:TeacherRequest): Promise<Teacher | Error>{
        const repo = getRepository(Teacher);

        if(await repo.findOne({name})){
            return new Error("Teacher already exists");
        }

        const teacher = repo.create({
            name
        });

        await repo.save(teacher);
        return teacher;
    }
}