import { getRepository } from "typeorm";
import { Discipline } from "../../entities/Discipline";
import { Student } from "../../entities/Student";
import { Teacher } from "../../entities/Teachers";

type DisciplineRequest = {
    name: string;
    description: string;
    teacher_id: string;
    student_ids: string[];
}

export class CreateDisciplineService{
    async execute({name, description, teacher_id, student_ids}: DisciplineRequest): Promise<Discipline | Error>{
        const repo = getRepository(Discipline);
        const repoTeacher = getRepository(Teacher);
        const repoStudent = getRepository(Student);

        if(await repo.findOne({name})){
            return new Error("Discipline already exists!");
        }

        const discipline = repo.create({
            name,
            description
        });

        if(teacher_id){
            if(!await repoTeacher.findOne(teacher_id)){
                return new Error("Teacher does not exists!");
            }
            discipline.teacher = await repoTeacher.findOne(teacher_id);
        }

        if(student_ids) discipline.students = await repoStudent.findByIds(student_ids);

        await repo.save(discipline);

        return discipline;
    }
}
