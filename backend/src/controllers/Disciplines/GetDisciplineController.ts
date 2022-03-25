import { Request, Response } from "express";
import { GetDisciplineService } from "../../services/Disciplines/GetDisciplineService";

export class GetDisciplineController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const service = new GetDisciplineService();

        const discipline = await service.execute(id);
        
        return response.json(discipline);
    }
}