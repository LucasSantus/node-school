import { Request, Response } from "express";
import { CreateTeacherService } from "../../services/Teachers/CreateTeacherService";

export class CreateTeacherController{
    async handle(request: Request, response: Response){
        const { first_name, last_name, email } = request.body;

        const service = new CreateTeacherService();

        const result = await service.execute({first_name, last_name, email});
        
        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}