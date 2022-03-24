import { useState } from 'react';

import { Box, Stack, Container, Typography, Grid, Button, Card, CardContent, IconButton } from '@mui/material';

import { ApiService } from "../services/ApiService";

import { useEffect } from "react";

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

import { DisciplineInterface } from '../types/types';

import { useNavigate } from "react-router-dom";

import Header from '../components/Header/Header';

export default function Dashboard(){
    const [disciplines, setDisciplines] = useState<DisciplineInterface[]>([]);

    let navigate = useNavigate();

    function handleGetAllDisciplines(){
        ApiService
            .get("/disciplines")
            .then((response) => {
                setDisciplines(response.data);
            })
            .catch((error) => {
                console.log(`Ocorreu uma falha ao buscar as disciplinas\n ${error}`);
            });
    }

    useEffect(() => {
        handleGetAllDisciplines();
    }, []);

    return (
        <Container>
            <Header />

            <Grid
                container 
                spacing={3} 
                paddingTop={5}
            >
                <Grid container justifyContent="space-between" alignItems="center">
                    <Grid item justifyContent="start">
                        <Typography variant="h4" component="h4">
                            Disciplinas
                        </Typography>
                        <Typography variant="subtitle2">
                            Estas são as disciplinas recentes
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button
                            sx={{ 
                                mt: { xs: 2, md: 0 }, 
                                backgroundColor: '#7063C0',
                                '&:hover': {
                                    background: '#6153bb' ,
                                    opacity: 0.5
                                },
                            }}
                            variant="contained"
                            onClick={() => {
                                navigate(`/disciplines/new/`);
                            }}
                        >
                            Registrar Disciplina
                        </Button>
                    </Grid>
                </Grid>
                
                {disciplines.length > 0 ? (
                    disciplines.map((item) => (
                        <Grid container item xs={12} md={4} sx={{ borderColor: 'white' }}>
                            <Grid container spacing={3}>
                                <Card sx={{
                                    width: '96%',
                                    paddingTop: 1
                                }}>

                                    <Button
                                        sx={{ 
                                            mt: { xs: 2, md: 0 }, 
                                            backgroundColor: 'transparent',
                                            color: '#90CAF9',
                                            fontSize: 20,
                                            '&:hover': {
                                                color: '#90CAF9',
                                                backgroundColor: 'transparent',
                                            },
                                        }}
                                        
                                        onClick={() => {
                                            navigate(`/disciplines/${item.id}`);
                                        }}
                                    >
                                        {item.title}
                                    </Button>

                                    <CardContent>
                                        <Typography sx={{ pb: 2 }} color="text.secondary">
                                            {item.description}
                                        </Typography>
                                        <Grid container justifyContent="space-between" alignItems="center" sx={{gap: 1}}>
                                            <Grid item></Grid>
                                            <Grid item justifyContent="end" alignItems="end">
                                                <IconButton
                                                    sx={{
                                                        '&:hover': {
                                                            background: '#070C27',
                                                            opacity: 0.5
                                                        },
                                                        color: 'green'
                                                    }}
                                                    color="inherit"
                                                    size="small"
                                                >
                                                    <EditTwoToneIcon fontSize="small" />
                                                </IconButton>

                                                <IconButton
                                                    sx={{
                                                        '&:hover': { 
                                                            background: '#070C27',
                                                            opacity: 0.5
                                                        },
                                                        color: 'red'
                                                    }}
                                                    color="inherit"
                                                    size="small"
                                                >
                                                    <DeleteTwoToneIcon fontSize="small" />
                                                </IconButton>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card >
                            </Grid >
                        </Grid >
                    ))) : (
                        <></>
                    )
                }
            </Grid>
        </Container>
    );
}