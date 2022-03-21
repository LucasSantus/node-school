import StudentInterface from "../types/student.type";
import { ApiService } from "./ApiService";

class StudentDataService {
    getAll() {
        return ApiService.get<Array<StudentInterface>>("/tutorials");
    }

    get(id: string) {
        return ApiService.get<StudentInterface>(`/tutorials/${id}`);
    }

    create(data: StudentInterface) {
        return ApiService.post<StudentInterface>("/tutorials", data);
    }

    update(data: StudentInterface, id: any) {
        return ApiService.put<any>(`/tutorials/${id}`, data);
    }

    delete(id: any) {
        return ApiService.delete<any>(`/tutorials/${id}`);
    }

    deleteAll() {
        return ApiService.delete<any>(`/tutorials`);
    }

    findByTitle(title: string) {
        return ApiService.get<Array<StudentInterface>>(`/tutorials?title=${title}`);
    }
}

export default new StudentDataService();