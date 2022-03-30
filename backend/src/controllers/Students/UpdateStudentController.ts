import { Request, Response } from "express";
import { UpdateStudentService } from "../../services/Students/UpdateStudentService";

export class UpdateStudentController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const { name, email, cpf, phone } = request.body;

        const service = new UpdateStudentService();

        const result = await service.execute({id, name, email, cpf, phone});
        
        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}