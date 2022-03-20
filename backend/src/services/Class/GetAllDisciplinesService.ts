import { getRepository } from "typeorm";
import { Discipline } from "../../entities/Discipline";

export class GetAllDisciplinesService{
    async execute(){
        const repo = getRepository(Discipline);

        // const disciplines = await repo.find({
        //     relations: ["teacher", "students"]
        // });

        const disciplines = await repo.find();

        return disciplines;
    }
}