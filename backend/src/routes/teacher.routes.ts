import { Router } from "express";

const routesTeacher = Router();

// Import Controller Teachers
import { CreateTeacherController } from "../controllers/Teachers/CreateTeacherController";
import { DeleteTeacherController } from "../controllers/Teachers/DeleteTeacherController";
import { GetAllTeachersController } from "../controllers/Teachers/GetAllTeachersController";
import { GetTeacherController } from "../controllers/Teachers/GetTeacherController";
import { UpdateTeacherController } from "../controllers/Teachers/UpdateTeacherController";

routesTeacher.post("/", new CreateTeacherController().handle);
routesTeacher.get("/", new GetAllTeachersController().handle);
routesTeacher.get("/:id", new GetTeacherController().handle);
routesTeacher.put("/:id", new UpdateTeacherController().handle);
routesTeacher.delete("/:id", new DeleteTeacherController().handle)

export { routesTeacher };