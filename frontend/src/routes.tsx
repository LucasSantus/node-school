import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import FormStudent from "./components/Form/FormStudent";
import Dashboard from "./pages/Dashboard";

import ListInformations from "./pages/Discipline/ListInformations";
import NotFound from "./pages/NotFound/NotFound";
import ListStudents from "./pages/Student/ListStudents";
import ListTeachers from "./pages/Teacher/ListTeachers";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Dashboard />} />

                <Route path="disciplines/:id" element={<ListInformations />} />

                <Route path="teachers" element={ <ListTeachers /> } >
                    {/* <Route path="new" element={ <FormStudent /> } /> */}
                    {/* <Route path=":id" element={ <GetStudent /> } /> */}
                </Route>

                <Route path="students" element={ <ListStudents /> } >
                    <Route path="new" element={ <FormStudent /> } />
                    {/* <Route path=":id" element={ <GetStudent /> } /> */}
                </Route>

                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}