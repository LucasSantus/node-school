import { getRepository } from "typeorm";
import { Student } from "../../entities/Student";

type StudentUpdateRequest = {
    id: string
    name: string;
}

export class UpdateStudentService{
    async execute({id, name}: StudentUpdateRequest){
        const repo = getRepository(Student);

        const student = await repo.findOne(id);

        if(!student){
            return new Error("Student does not exists!");
        }

        student.name = name ? name : student.name;
        await repo.save(student);
        return student;
    }
}