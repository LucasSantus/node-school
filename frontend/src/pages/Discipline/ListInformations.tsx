import {useEffect, useState } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';

import {
  useParams
} from "react-router-dom";

import { ApiService } from '../../services/ApiService';
import { DisciplineInterface } from '../../types/types';

interface InterfaceRow {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
}

export default function ListInformations(){
    const [discipline, setDiscipline] = useState<DisciplineInterface>();
    let { id } = useParams();

    useEffect(() => {
        ApiService
            .get(`/disciplines/${id}`)
            .then((response) => {
                setDiscipline(response.data);
            })
            .catch((err) => {
                alert("faliceu")
            });
    }, []);

    return (
        <>
            <Container maxWidth="lg">
                <Grid container justifyContent="space-between" alignItems="center" paddingTop={3}>
                    <Grid item>
                        <Typography variant="h2" component="h2" gutterBottom>
                            Alunos
                        </Typography>
                        <Typography variant="subtitle2">
                            Estes são os alunos recentes
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            sx={{ mt: { xs: 2, md: 0 } }}
                            variant="contained"
                        >
                            Cadastrar Aluno
                        </Button>
                    </Grid>
                </Grid>

                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                    <Grid 
                        item 
                        xs={12}
                    >
                        
                    </Grid>
                </Grid>
            </Container>
        </>
    );
}