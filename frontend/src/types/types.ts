
export interface STInterface {
    id?: string;
    first_name: string;
    last_name: string;
    email: string;
    create_at: string;
}

export interface DisciplineInterface {
    id?: string;
    create_at: string;
    title: string;
    description: string;
    teacher_id: string;
    students: STInterface[];
}