import { getRepository } from "typeorm";
import { Class } from "../../entities/Class";

type ClassUpdateRequest = {
    id: string
    name: string;
}

export class UpdateClassService{
    async execute({id, name}: ClassUpdateRequest){
        const repo = getRepository(Class);

        const discipline = await repo.findOne(id);

        if(!discipline){
            return new Error("Discipline does not exists!");
        }

        discipline.name = name ? name : discipline.name;
        await repo.save(discipline);
        return discipline;
    }
}