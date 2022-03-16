import { getRepository } from "typeorm";
import { Class } from "../../entities/Class";
import { Teacher } from "../../entities/Teachers";

type ClassRequest = {
    name: string;
    description: string;
    category_id: string;
}

export class CreateClassService{
    async execute({name, description, category_id}: ClassRequest): Promise<Class | Error>{
        const repo = getRepository(Class);
        const repoTeacher = getRepository(Teacher);

        if(!await repoTeacher.findOne(category_id)){
            return new Error("Teacher does not exists");
        }

        const video = repo.create({
            name,
            description
        });

        await repo.save(video);
        return video;
    }
}