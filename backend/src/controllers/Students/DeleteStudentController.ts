import { Request, Response } from "express";
import { DeleteStudentService } from "../../services/Students/DeleteStudentService";

export class DeleteStudentController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const service = new DeleteStudentService();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(200).end();
    }
}