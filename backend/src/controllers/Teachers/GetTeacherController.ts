import { Request, Response } from "express";
import { GetTeacherService } from "../../services/Teachers/GetTeacherService";

export class GetTeacherController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const service = new GetTeacherService();

        const teacher = await service.execute(id);
        
        return response.json(teacher);
    }
}