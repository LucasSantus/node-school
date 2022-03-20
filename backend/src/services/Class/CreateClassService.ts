import { getRepository } from "typeorm";
import { Class } from "../../entities/Class";
import { Student } from "../../entities/Student";
import { Teacher } from "../../entities/Teachers";

type ClassRequest = {
    name: string;
    description: string;
    teacher_id: string;
    students: string[];
}

export class CreateClassService{
    async execute({name, description, teacher_id, students}: ClassRequest): Promise<Class | Error>{
        const repo = getRepository(Class);
        const repoTeacher = getRepository(Teacher);
        const repoStudent = getRepository(Student);

        if(await repo.findOne({name})){
            return new Error("Discipline already exists!");
        }

        const classe = repo.create({
            name,
            description
        });

        if(teacher_id){
            if(!await repoTeacher.findOne(teacher_id)){
                return new Error("Teacher does not exists!");
            }
            classe.teacher = await repoTeacher.findOne(teacher_id);
        }

        if(students) classe.students = await repoStudent.findByIds(students);

        await repo.save(classe);
        return classe;
    }
}
