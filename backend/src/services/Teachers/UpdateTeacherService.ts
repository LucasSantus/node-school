import { getRepository } from "typeorm";
import { Teacher } from "../../entities/Teachers";

type TeacherUpdateRequest = {
    id: string
    name: string;
}

export class UpdateTeacherService{
    async execute({id, name}: TeacherUpdateRequest){
        const repo = getRepository(Teacher);

        const teacher = await repo.findOne(id);

        if(!teacher){
            return new Error("Teacher does not exists!");
        }

        teacher.name = name ? name : teacher.name;
        await repo.save(teacher);
        return teacher;
    }
}