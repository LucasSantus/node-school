import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";
import { LinkCustom } from "../../ui/styles/components/Link";

export default function Header(){
    let location = useLocation();
    let url_location = '';
    const url = location.pathname.split("/")

    url[1] ? url_location = url[1] : url_location = "";

    return (
        <nav>
            <Grid sx={{ width:'100vh', padding: 2 }} >
                <LinkCustom to="/" sx={{ color: url_location === "disciplines" || url_location === "" ? '#6153BB': 'white'}}>
                    Home
                </LinkCustom>

                <LinkCustom to="/students/" sx={{ color: url_location === "students" ? '#6153BB': 'white'}}>
                    Alunos
                </LinkCustom>

                <LinkCustom to="/teachers/" sx={{ color: url_location === "teachers" ? '#6153BB': 'white'}}>
                    Professores
                </LinkCustom>
            </Grid>
        </nav>
    );
}