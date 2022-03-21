import { Request, Response } from "express";
import { DeleteDisciplineService } from "../../services/Disciplines/DeleteDisciplineService";

export class DeleteDisciplineController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const service = new DeleteDisciplineService();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(200).end();
    }
}