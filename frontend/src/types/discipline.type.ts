import StudentInterface from "./student.type";

export default interface DisciplineInterface {
    id?: string
    create_at: string
    title: string
    description: string
    teacher_id?: string
    students?: StudentInterface[]
}