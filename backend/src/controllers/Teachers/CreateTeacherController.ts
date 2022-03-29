import { Request, Response } from "express";
import { CreateTeacherService } from "../../services/Teachers/CreateTeacherService";

export class CreateTeacherController{
    async handle(request: Request, response: Response){
        const { name, email, cpf, telefone } = request.body;

        const service = new CreateTeacherService();

        const result = await service.execute({name, email, cpf, telefone});
        
        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}