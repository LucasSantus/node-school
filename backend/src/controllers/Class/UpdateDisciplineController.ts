import { Request, Response } from "express";
import { UpdateDisciplineService } from "../../services/Class/UpdateDisciplineService";

export class UpdateDisciplineController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const { name, description, teacher_id, student_id } = request.body;

        const service = new UpdateDisciplineService();

        const result = await service.execute({id, name, description, teacher_id, student_id});
        
        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}