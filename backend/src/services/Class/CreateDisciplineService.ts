import { getRepository } from "typeorm";
import { Discipline } from "../../entities/Discipline";
import { Student } from "../../entities/Student";
import { Teacher } from "../../entities/Teachers";

type DisciplineRequest = {
    name: string;
    description: string;
    teacher_id: string;
    student_id: string[];
}

export class CreateDisciplineService{
    async execute({name, description, teacher_id, student_id}: DisciplineRequest): Promise<Discipline | Error>{
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

        // const students: Array<Student> = [];
        // for (let student of student_id) {
            
        //   const firstName = name.firstName();
        //   const lastName = name.lastName();
        //   const isActive = random.arrayElement([true, false]);
        //   const email = internet.email();
        //   const password = internet.password();
        //   const birthDate = date.past();

        //   const user: Partial<UserEntity> = new UserEntity(
        //     firstName,
        //     lastName,
        //     isActive,
        //     email,
        //     birthDate,
        //     password
        //   );
        //   users.push((await con.manager.save(user)) as UserEntity);
        // }

        if(student_id) discipline.students = await repoStudent.findByIds(student_id);

        await repo.save(discipline);

        return discipline;
    }
}
