import { Router } from "express";

// Import Controller Students
import { CreateStudentController } from "./controllers/Students/CreateStudentController";
import { DeleteStudentController } from "./controllers/Students/DeleteStudentController";
import { GetAllStudentsController } from "./controllers/Students/GetAllStudentsController";
import { UpdateStudentController } from "./controllers/Students/UpdateStudentController";

// Import Controller Teachers
import { CreateTeacherController } from "./controllers/Teachers/CreateTeacherController";
import { DeleteTeacherController } from "./controllers/Teachers/DeleteTeacherController";
import { GetAllTeachersController } from "./controllers/Teachers/GetAllTeachersController";
import { UpdateTeacherController } from "./controllers/Teachers/UpdateTeacherController";

// Import Controller Classes
import { CreateClassController } from "./controllers/Class/CreateClassController";
import { GetAllClassesController } from "./controllers/Class/GetAllClassesController";

const routes = Router();

routes.post("/students", new CreateStudentController().handle);
routes.get("/students", new GetAllStudentsController().handle);
routes.put("/students/:id", new UpdateStudentController().handle);
routes.delete("/students/:id", new DeleteStudentController().handle)

routes.post("/teachers", new CreateTeacherController().handle);
routes.get("/teachers", new GetAllTeachersController().handle);
routes.put("/teachers/:id", new UpdateTeacherController().handle);
routes.delete("/teachers/:id", new DeleteTeacherController().handle)

routes.post("/classes", new CreateClassController().handle);
routes.get("/classes", new GetAllClassesController().handle);

export { routes };