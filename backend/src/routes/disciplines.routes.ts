import { Router } from "express";

const routesDiscipline = Router();

// Import Controller Classes
import { CreateDisciplineController } from "../controllers/Disciplines/CreateDisciplineController";
import { DeleteDisciplineController } from "../controllers/Disciplines/DeleteDisciplineController";
import { GetAllDisciplinesController } from "../controllers/Disciplines/GetAllDisciplinesController";
import { GetDisciplineController } from "../controllers/Disciplines/GetDisciplineController";
import { UpdateDisciplineController } from "../controllers/Disciplines/UpdateDisciplineController";

routesDiscipline.post("/", new CreateDisciplineController().handle);
routesDiscipline.get("/", new GetAllDisciplinesController().handle);
routesDiscipline.get("/:id", new GetDisciplineController().handle);
routesDiscipline.put("/:id", new UpdateDisciplineController().handle);
routesDiscipline.delete("/:id", new DeleteDisciplineController().handle)

export { routesDiscipline };