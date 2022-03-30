import { getRepository } from "typeorm";
import { Discipline } from "../../entities/Discipline";
import { Student } from "../../entities/Student";
import { Teacher } from "../../entities/Teachers";

type DisciplineUpdateRequest = {
    id: string
    title: string;
    description: string;
    teacher_id: string;
    student_id: string[];
}

export class UpdateDisciplineService{
    async execute({id, title, description, teacher_id, student_id}: DisciplineUpdateRequest){
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
            for (let name of student_id) {
                listStudents.push(await repoStudent.findOne({where:{name: name}}));
            }
        }

        discipline.title = title ? title : discipline.title;
        discipline.description = description ? description : discipline.description;
        discipline.teacher_id = teacher_id ? teacher_id : discipline.teacher_id;
        discipline.students = listStudents ? listStudents : discipline.students;

        await repo.save(discipline);

        return discipline;
    }
}