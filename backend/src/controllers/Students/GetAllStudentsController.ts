import { Request, Response } from "express";
import { GetAllStudentsService } from "../../services/Students/GetAllStudentsService";

export class GetAllStudentsController{
    async handle(request: Request, response: Response){
        const service = new GetAllStudentsService();
        const students = await service.execute();
        return response.json(students);
    }
}