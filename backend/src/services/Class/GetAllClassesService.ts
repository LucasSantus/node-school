import { getRepository } from "typeorm";
import { Class } from "../../entities/Class";


export class GetAllClassesService{
    async execute(){
        const repo = getRepository(Class);

        // const classes = await repo.find({
        //     relations: ["tea"]
        // });

        const classes = await repo.find();

        return classes;
    }
}