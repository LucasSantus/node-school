import { getRepository } from "typeorm";
import { Teacher } from "../../entities/Teachers";

export class GetAllTeachersService{
    async execute(){
        const repo = getRepository(Teacher);
        const teachers = await repo.find();
        
        return teachers;
    }
}