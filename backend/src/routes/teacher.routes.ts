import { Router } from "express";

const routesTeacher = Router();

// Import Controller Teachers
import { CreateTeacherController } from "../controllers/Teachers/CreateTeacherController";
import { DeleteTeacherController } from "../controllers/Teachers/DeleteTeacherController";
import { GetAllTeachersController } from "../controllers/Teachers/GetAllTeachersController";
import { UpdateTeacherController } from "../controllers/Teachers/UpdateTeacherController";

routesTeacher.post("/teachers", new CreateTeacherController().handle);
routesTeacher.get("/teachers", new GetAllTeachersController().handle);
routesTeacher.put("/teachers/:id", new UpdateTeacherController().handle);
routesTeacher.delete("/teachers/:id", new DeleteTeacherController().handle)

export { routesTeacher };