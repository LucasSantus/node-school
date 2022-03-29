import { Request, Response } from "express";
import { GetAllStudentsNameService } from "../../services/Students/GetAllStudentsNameService";

export class GetAllStudentsNameController{
    async handle(request: Request, response: Response){
        const { name } = request.body;

        const service = new GetAllStudentsNameService();

        const result = await service.execute({name});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}