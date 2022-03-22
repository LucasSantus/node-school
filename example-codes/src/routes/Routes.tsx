import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import Teams from "../pages/Teams";

import Dashboard from "../pages/Dashboard";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="teams" element={<Teams />}>
                    {/* <Route path=":teamId" element={<Team />} />
                    <Route path="new" element={<NewTeamForm />} />
                    <Route index element={<LeagueStandings />} /> */}
                </Route>
            </Routes>
        </Router>
    );
};
