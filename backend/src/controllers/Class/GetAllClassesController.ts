import { Request, Response } from "express";
import { GetAllClassesService } from "../../services/Class/GetAllClassesService";

export class GetAllClassesController{
    async handle(request: Request, response: Response){
        const service = new GetAllClassesService();

        const classes = await service.execute();
        
        return response.json(classes);
    }
}