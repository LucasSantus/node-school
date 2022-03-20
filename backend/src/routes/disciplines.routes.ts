import { Router } from "express";

const routesDiscipline = Router();

// Import Controller Classes
import { CreateDisciplineController } from "../controllers/Class/CreateDisciplineController";
import { DeleteDisciplineController } from "../controllers/Class/DeleteDisciplineController";
import { GetAllDisciplinesController } from "../controllers/Class/GetAllDisciplinesController";
import { UpdateDisciplineController } from "../controllers/Class/UpdateDisciplineController";

routesDiscipline.post("/", new CreateDisciplineController().handle);
routesDiscipline.get("/", new GetAllDisciplinesController().handle);
routesDiscipline.put("/:id", new UpdateDisciplineController().handle);
routesDiscipline.delete("/:id", new DeleteDisciplineController().handle)

export { routesDiscipline };