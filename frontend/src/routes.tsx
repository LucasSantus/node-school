import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import CreateDiscipline from "./pages/Discipline/CreateDiscipline";
import ModifyDiscipline from "./pages/Discipline/ModifyDiscipline";
import ReadDiscipline from "./pages/Discipline/ReadDiscipline";

import NotFound from "./pages/NotFound/NotFound";

import CreateStudent from "./pages/Student/CreateStudent";
import ListStudents from "./pages/Student/ListStudents";
import ModifyStudent from "./pages/Student/ModifyStudent";
import ReadStudent from "./pages/Student/ReadStudent";

import CreateTeacher from "./pages/Teacher/CreateTeacher";
import ListTeachers from "./pages/Teacher/ListTeachers";
import ModifyTeacher from "./pages/Teacher/ModifyTeacher";
import ReadTeacher from "./pages/Teacher/ReadTeacher";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="disciplines/new" element={ <CreateDiscipline /> } />
                <Route path="disciplines/modify/:id" element={ <ModifyDiscipline/> } />
                <Route path="disciplines/read/:id" element={ <ReadDiscipline/> } />

                <Route path="teachers" element={ <ListTeachers /> } />
                <Route path="teachers/new" element={ <CreateTeacher /> } />
                <Route path="teachers/modify/:id" element={ <ModifyTeacher/> } />
                <Route path="teachers/read/:id" element={ <ReadTeacher/> } />

                <Route path="students" element={ <ListStudents /> } />
                <Route path="students/new" element={ <CreateStudent /> } />
                <Route path="students/modify/:id" element={ <ModifyStudent /> } />
                <Route path="students/read/:id" element={ <ReadStudent /> } />

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}