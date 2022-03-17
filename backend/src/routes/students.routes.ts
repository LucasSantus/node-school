import { Router } from "express";

const routesStudent = Router();

// Import Controller Students
import { CreateStudentController } from "../controllers/Students/CreateStudentController";
import { DeleteStudentController } from "../controllers/Students/DeleteStudentController";
import { GetAllStudentsController } from "../controllers/Students/GetAllStudentsController";
import { UpdateStudentController } from "../controllers/Students/UpdateStudentController";

routesStudent.post("/students", new CreateStudentController().handle);
routesStudent.get("/students", new GetAllStudentsController().handle);
routesStudent.put("/students/:id", new UpdateStudentController().handle);
routesStudent.delete("/students/:id", new DeleteStudentController().handle)

export { routesStudent };