import { DisciplineInterface } from "../types/types";
import { ApiService } from "./ApiService";

class DisciplineDataService {
    getAllDisciplines() {
        return ApiService
                .get<Array<DisciplineInterface>>("/disciplines")
                .catch((error) => {
                    console.log(`Ocorreu uma falha ao tentar buscar as disciplinas!\n Error: ${error}`);
                }); 
    }

    getDiscipline(id: string) {
        return ApiService
                .get<DisciplineInterface>(`/disciplines/${id}`)
                .catch((error) => {
                    console.log(`Ocorreu uma falha ao tentar buscar a disciplina!\n Error: ${error}`);
                }); 
    }

    createDiscipline(data: DisciplineInterface) {
        return ApiService
                .post<DisciplineInterface>("/disciplines", data)
                .catch((error) => {
                    console.log(`Ocorreu uma falha ao tentar registrar a disciplina!\n Error: ${error}`);
                }); 
    }

    updateDiscipline(id: any, data: DisciplineInterface) {
        return ApiService
                .put<any>(`/disciplines/${id}`, data)
                .catch((error) => {
                    console.log(`Ocorreu uma falha ao tentar alterar a disciplina!\n Error: ${error}`);
                }); 
    }

    deleteDiscipline(id: any) {
        return ApiService
                .delete<any>(`/disciplines/${id}`)
                .catch((error) => {
                    console.log(`Ocorreu uma falha ao tentar remover a disciplina!\n Error: ${error}`);
                }); 
    }
}

export default new DisciplineDataService();