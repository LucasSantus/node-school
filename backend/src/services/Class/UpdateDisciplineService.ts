import { getRepository } from "typeorm";
import { Discipline } from "../../entities/Discipline";
import { Student } from "../../entities/Student";
import { Teacher } from "../../entities/Teachers";

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
        const repoTeacher = getRepository(Teacher);
        const repoStudent = getRepository(Student);

        const discipline = await repo.findOne(id);

        if(!discipline){
            return new Error("Discipline does not exists!");
        }

        if(teacher_id){
            if(!await repoTeacher.findOne(teacher_id)){
                return new Error("Teacher does not exists!");
            }
        }

        const listStudents: Student[] = [];

        if(student_id){
            for (let id of student_id) {
                listStudents.push(await repoStudent.findOne(id));
            }
        }

        discipline.name = name ? name : discipline.name;
        discipline.description = description ? description : discipline.description;
        discipline.teacher_id = teacher_id ? teacher_id : discipline.teacher_id;
        discipline.students = listStudents;

        await repo.save(discipline);
        return discipline;
    }
}


modified: entity ( Discipline, Student)

modified: services ( CreateDisciplineService, GetAllDisciplinesService, UpdateDisciplineService )

Insomnia_2022-03-21.json
RelationStudents