import { Request, Response } from "express";
import { UpdateTeacherService } from "../../services/Teachers/UpdateTeacherService";

export class UpdateTeacherController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const { first_name, last_name, email } = request.body;

        const service = new UpdateTeacherService();

        const result = await service.execute({id, first_name, last_name, email});
        
        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}