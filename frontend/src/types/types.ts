
export interface STInterface {
    id?: string;
    name: string;
    cpf: string;
    email: string;
    phone: string;
    create_at?: string;
}

export interface DisciplineInterface {
    id?: string;
    title: string;
    description: string;
    teacher_id: string;
    students: STInterface[];
    create_at?: string;
}