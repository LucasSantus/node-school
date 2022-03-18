import { Router } from "express";

const routesClass = Router();

// Import Controller Classes
import { CreateClassController } from "../controllers/Class/CreateClassController";
import { GetAllClassesController } from "../controllers/Class/GetAllClassesController";

routesClass.post("/", new CreateClassController().handle);
routesClass.get("/", new GetAllClassesController().handle);

export { routesClass };