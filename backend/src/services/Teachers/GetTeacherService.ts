import { getRepository } from "typeorm";
import { Teacher } from "../../entities/Teachers";

export class GetTeacherService{
    async execute(id: string){
        const repo = getRepository(Teacher);

        const teacher = await repo.findOne(id);

        return teacher;
    }
}