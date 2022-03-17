import "reflect-metadata";
import express from "express";
import './database'

import { routesStudent } from "./routes/students.routes";
import { routesClass } from "./routes/class.routes";
import { routesTeacher } from "./routes/teacher.routes";

// PORT app 
const PORT = 3000;

// create app express
const app = express();

app.use(express.json());

app.use(routesStudent);
app.use(routesClass);
app.use(routesTeacher);

app.listen(PORT, () => console.log(`Server is running in ${PORT}`));