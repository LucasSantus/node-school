import { getRepository } from "typeorm";
import { Discipline } from "../../entities/Discipline";

type DisciplineUpdateRequest = {
    id: string
    name: string;
}

export class UpdateDisciplineService{
    async execute({id, name}: DisciplineUpdateRequest){
        const repo = getRepository(Discipline);

        const discipline = await repo.findOne(id);

        if(!discipline){
            return new Error("Discipline does not exists!");
        }

        discipline.name = name ? name : discipline.name;
        await repo.save(discipline);
        return discipline;
    }
}