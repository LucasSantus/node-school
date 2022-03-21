import { Request, Response } from "express";
import { CreateStudentService } from "../../services/Students/CreateStudentService";

export class CreateStudentController{
    async handle(request: Request, response: Response){
        const { first_name, last_name, email } = request.body;

        const service = new CreateStudentService();

        const result = await service.execute({first_name, last_name, email});
        
        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}