import { Router } from 'express';
import { routesDiscipline } from './disciplines.routes';
import { routesStudent } from './students.routes';
import { routesTeacher } from './teacher.routes';

const routes = Router();

routes.use('/disciplines', routesDiscipline);
routes.use('/students', routesStudent);
routes.use('/teachers', routesTeacher);

export default routes;
