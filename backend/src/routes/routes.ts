import { Router } from 'express';
import { routesClass } from './class.routes';
import { routesStudent } from './students.routes';
import { routesTeacher } from './teacher.routes';

const routes = Router();

routes.use('/classes', routesClass);
routes.use('/students', routesStudent);
routes.use('/teachers', routesTeacher);

export default routes;
