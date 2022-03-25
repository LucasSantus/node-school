import { STInterface } from "../types/types";
import { ApiService } from "./ApiService";

class StudentDataService {
    getAllStudents() {
        return ApiService
                .get<Array<STInterface>>("/students")
                .catch((error) => {
                    console.log(`Ocorreu uma falha ao tentar buscar os alunos!\n Error: ${error}`);
                }); 
    }

    getStudent(id: string) {
        return ApiService
                .get<STInterface>(`/students/${id}`)
                .catch((error) => {
                    console.log(`Ocorreu uma falha ao tentar buscar o aluno!\n Error: ${error}`);
                }); 
    }

    createStudent(data: STInterface) {
        return ApiService
                .post<STInterface>("/students", data)
                .catch((error) => {
                    console.log(`Ocorreu uma falha ao tentar registrar o aluno!\n Error: ${error}`);
                }); 
    }

    updateStudent(id: any, data: STInterface) {
        return ApiService
                .put<any>(`/students/${id}`, data)
                .catch((error) => {
                    console.log(`Ocorreu uma falha ao tentar alterar o aluno!\n Error: ${error}`);
                }); 
    }

    deleteStudent(id: any) {
        return ApiService
                .delete<any>(`/students/${id}`)
                .catch((error) => {
                    console.log(`Ocorreu uma falha ao tentar remover o aluno!\n Error: ${error}`);
                }); 
    }
}

export default new StudentDataService();