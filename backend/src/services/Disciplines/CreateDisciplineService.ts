import { DeleteDateColumn, getRepository } from "typeorm";
import { Discipline } from "../../entities/Discipline";
import { Student } from "../../entities/Student";
import { Teacher } from "../../entities/Teachers";

type DisciplineRequest = {
    title: string;
    description: string;
    teacher_id: string;
    student_id: string[];
}

export class CreateDisciplineService{
    async execute({title, description, teacher_id, student_id}: DisciplineRequest): Promise<Discipline | Error>{
        const repo = getRepository(Discipline);
        const repoTeacher = getRepository(Teacher);
        const repoStudent = getRepository(Student);

        if(await repo.findOne({title})){
            return new Error("Discipline already exists!");
        }

        if(teacher_id){
            if(!await repoTeacher.findOne(teacher_id)){
                return new Error("Teacher does not exists!");
            }
        }

        const listStudents: Student[] = [];

        if(student_id){
            for (let student of student_id) {
                let objStudent: Student
                try{
                    objStudent = await repoStudent.findOne({
                        where: {name: student}
                    })
                }
                catch(error){
                    objStudent = await repoStudent.findOne(student) 
                }
                listStudents.push(objStudent);
            }
        }
        
        const discipline = repo.create({
            title,
            description,
            teacher_id,
        });

        discipline.students = listStudents

        await repo.save(discipline);
    
        return discipline;
    }
}