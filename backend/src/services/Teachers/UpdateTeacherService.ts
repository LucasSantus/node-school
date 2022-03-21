import { getRepository } from "typeorm";
import { Teacher } from "../../entities/Teachers";

type TeacherUpdateRequest = {
    id: string
    first_name: string;
    last_name: string;
    email: string;
}

export class UpdateTeacherService{
    async execute({id, first_name, last_name, email}: TeacherUpdateRequest){
        const repo = getRepository(Teacher);

        const teacher = await repo.findOne(id);

        if(!teacher){
            return new Error("Teacher does not exists!");
        }

        teacher.first_name = first_name ? first_name : teacher.first_name
        teacher.last_name = last_name ? last_name : teacher.last_name
        teacher.email = email ? email : teacher.email

        await repo.save(teacher);
        return teacher;
    }
}