import { Request, Response } from "express";
import { DeleteTeacherService } from "../../services/Teachers/DeleteTeacherService";

export class DeleteTeacherController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const service = new DeleteTeacherService();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(200).end();
    }
}