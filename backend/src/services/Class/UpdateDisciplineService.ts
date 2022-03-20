import { getRepository } from "typeorm";
import { Discipline } from "../../entities/Discipline";

type DisciplineUpdateRequest = {
    id: string
    name: string;
    description: string;
    teacher_id: string;
    student_id: string[];
}

export class UpdateDisciplineService{
    async execute({id, name, description, teacher_id, student_id}: DisciplineUpdateRequest){
        const repo = getRepository(Discipline);

        const discipline = await repo.findOne(id);

        if(!discipline){
            return new Error("Discipline does not exists!");
        }

        discipline.name = name ? name : discipline.name;
        discipline.description = description ? description : discipline.description;
        discipline.teacher_id = teacher_id ? teacher_id : discipline.teacher_id;
        // discipline.students = students ? students : discipline.students;

        await repo.save(discipline);
        return discipline;
    }
}