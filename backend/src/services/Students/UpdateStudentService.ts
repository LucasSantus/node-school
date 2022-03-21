import { getRepository } from "typeorm";
import { Student } from "../../entities/Student";

type StudentUpdateRequest = {
    id: string
    first_name: string;
    last_name: string;
    email: string;
}

export class UpdateStudentService{
    async execute({id, first_name, last_name, email}: StudentUpdateRequest){
        const repo = getRepository(Student);

        const student = await repo.findOne(id);

        if(!student){
            return new Error("Student does not exists!");
        }

        student.first_name = first_name ? first_name : student.first_name
        student.last_name = last_name ? last_name : student.last_name
        student.email = email ? email : student.email

        await repo.save(student);
        return student;
    }
}