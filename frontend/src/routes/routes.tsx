import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import App from "../App";
import FormStudent from "../components/Form/FormStudent";

import Dashboard from "../pages/dashboard";
import ListInformations from "../pages/ListInformations";

export function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="disciplines/:id" element={<ListInformations />} />
                <Route path="form/student" element={<FormStudent />} />
                    {/* <Route path=":teamId" element={<Team />} />
                    <Route path="new" element={<NewTeamForm />} /> */}
                {/* </Route> */}
            </Routes>
        </BrowserRouter>
    )
}