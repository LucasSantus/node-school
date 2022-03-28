import { Request, Response } from "express";
import { GetStudentService } from "../../services/Students/GetStudentService";

export class GetStudentController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const service = new GetStudentService();

        const student = await service.execute(id);
        
        return response.json(student);
    }
}