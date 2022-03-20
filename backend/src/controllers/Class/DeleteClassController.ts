import { Request, Response } from "express";
import { DeleteClassService } from "../../services/Class/DeleteClassService";

export class DeleteClassController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const service = new DeleteClassService();

        const result = await service.execute(id);

        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.status(200).end();
    }
}