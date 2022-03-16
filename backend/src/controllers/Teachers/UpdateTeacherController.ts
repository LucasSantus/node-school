import { Request, Response } from "express";
import { UpdateTeacherService } from "../../services/Teachers/UpdateTeacherService";

export class UpdateTeacherController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const { name } = request.body;

        const service = new UpdateTeacherService();

        const result = await service.execute({id, name});
        
        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}