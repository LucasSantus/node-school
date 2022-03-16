import { Router } from "express";

// Import Controller Students
import { CreateStudentController } from "./controllers/Students/CreateStudentController";
import { DeleteStudentController } from "./controllers/Students/DeleteStudentController";
import { GetAllStudentsController } from "./controllers/Students/GetAllStudentsController";
import { UpdateStudentController } from "./controllers/Students/UpdateStudentController";

const routes = Router();

routes.post("/students", new CreateStudentController().handle);
routes.get("/students", new GetAllStudentsController().handle);
routes.put("/students/:id", new UpdateStudentController().handle);
routes.delete("/students/:id", new DeleteStudentController().handle)

// routes.post("/videos", new CreateVideoController().handle);
// routes.get("/videos", new GetAllVideosController().handle);

export { routes };