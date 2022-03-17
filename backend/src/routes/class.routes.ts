import { Router } from "express";

const routesClass = Router();

// Import Controller Classes
import { CreateClassController } from "../controllers/Class/CreateClassController";
import { GetAllClassesController } from "../controllers/Class/GetAllClassesController";

routesClass.post("/classes", new CreateClassController().handle);
routesClass.get("/classes", new GetAllClassesController().handle);

export { routesClass };