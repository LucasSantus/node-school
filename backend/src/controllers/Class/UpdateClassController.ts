import { Request, Response } from "express";

export class UpdateClassController{
    async handle(request: Request, response: Response){
        const { id } = request.params;

        const { name, description } = request.body;

        const service = new UpdateClassService();

        const result = await service.execute({id, name});
        
        if(result instanceof Error){
            return response.status(400).json(result.message);
        }

        return response.json(result);
    }
}