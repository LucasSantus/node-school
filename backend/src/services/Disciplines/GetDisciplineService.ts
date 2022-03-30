import { getRepository } from "typeorm";
import { Discipline } from "../../entities/Discipline";

export class GetDisciplineService{
    async execute(id: string){
        const repo = getRepository(Discipline);

        const discipline = await repo.findOne(
            id,
            {
                relations: ["students"]
            }
        );

        return discipline;
    }
}