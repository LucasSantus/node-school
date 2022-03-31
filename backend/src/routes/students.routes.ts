import { Router } from "express";

const routesStudent = Router();

// Import Controller Students
import { CreateStudentController } from "../controllers/Students/CreateStudentController";
import { DeleteStudentController } from "../controllers/Students/DeleteStudentController";
import { GetAllStudentsController } from "../controllers/Students/GetAllStudentsController";
import { GetStudentController } from "../controllers/Students/GetStudentController";
import { UpdateStudentController } from "../controllers/Students/UpdateStudentController";

routesStudent.post("/", new CreateStudentController().handle);
routesStudent.get("/", new GetAllStudentsController().handle);
routesStudent.get("/:id", new GetStudentController().handle);
routesStudent.put("/:id", new UpdateStudentController().handle);
routesStudent.delete("/:id", new DeleteStudentController().handle)

export { routesStudent };