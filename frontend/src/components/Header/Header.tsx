import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { LinkCustom } from "../../ui/styles/components/Link";

export default function Header(){
    let location = useLocation();

    return (
        <nav>
            <Grid sx={{ width:'100vh', padding: 2 }} >
                <LinkCustom to="/" sx={{ color: location.pathname === "/" ? '#6153BB': 'white'}}>
                    Home
                </LinkCustom>

                <LinkCustom to="/students/" sx={{ color: location.pathname === "/students/" ? '#6153BB': 'white'}}>
                    Alunos
                </LinkCustom>

                <LinkCustom to="/teachers/" sx={{ color: location.pathname === "/teachers/" ? '#6153BB': 'white'}}>
                    Professores
                </LinkCustom>
            </Grid>
        </nav>
    );
}