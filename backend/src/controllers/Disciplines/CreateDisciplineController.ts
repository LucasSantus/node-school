import { Request, Response } from "express";
import { CreateDisciplineService } from "../../services/Disciplines/CreateDisciplineService";

export class CreateDisciplineController{
    async handle(request: Request, response: Response){
        const { title, description, teacher_id, student_id } = request.body;

        const service = new CreateDisciplineService();

        const result = await service.execute({title, description, teacher_id, student_id});

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}