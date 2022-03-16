import { Request, Response } from "express";
import { GetAllTeachersService } from "../../services/Teachers/GetAllTeachersService";

export class GetAllTeachersController{
    async handle(request: Request, response: Response){
        const service = new GetAllTeachersService();
        const teachers = await service.execute();
        return response.json(teachers);
    }
}