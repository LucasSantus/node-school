import { Request, Response } from "express";
import { GetAllDisciplinesService } from "../../services/Disciplines/GetAllDisciplinesService";

export class GetAllDisciplinesController{
    async handle(request: Request, response: Response){
        const service = new GetAllDisciplinesService();

        const disciplines = await service.execute();
        
        return response.json(disciplines);
    }
}