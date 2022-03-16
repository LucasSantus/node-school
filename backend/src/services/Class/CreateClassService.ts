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

        const classe = await repo.findOne(name);

        if(!await repoTeacher.findOne(teacher_id)){
            return new Error("Teacher does not exists");
        }

        const teacherExists = await repoTeacher.findOne(teacher_id);

        const studentsExists = await repoStudent.findByIds(
            students
        );

        classe.name = name
        classe.description = description
        classe.teacher = teacherExists
        classe.students = studentsExists;

        await repo.save(classe);

        return classe;
    }
}
