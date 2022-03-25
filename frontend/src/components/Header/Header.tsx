import { Grid } from "@mui/material";
import { LinkCustom } from "../../ui/styles/components/Link";

export default function Header(){
    return (
        <nav>
            <Grid 
                sx={{
                    width:'100vh',
                    padding: 2
                }}
            >
                <LinkCustom to="/">
                    Home
                </LinkCustom>

                <LinkCustom to="/students/">
                    Students
                </LinkCustom>

                <LinkCustom to="/teachers/">
                    Teacher
                </LinkCustom>
            </Grid>
        </nav>
    );
}