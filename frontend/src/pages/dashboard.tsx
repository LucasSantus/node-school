import { useState } from 'react';

import { Box, Container, Typography, Grid, Button, Card, CardHeader, CardContent, IconButton, Link } from '@mui/material';

import "./../ui/styles/pages/Dashboard.css"

import { ApiService } from "../services/ApiService";
import DisciplineInterface from "../types/discipline.type";
import { useEffect } from "react";

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';

import { NavLink } from 'react-router-dom';

export default function Dashboard(){
    const [disciplines, setDisciplines] = useState<DisciplineInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ApiService
            .get("/disciplines")
            .then((response) => {
                setDisciplines(response.data);
                setLoading(false);
            })
            .catch((err) => {
            });
    }, []);

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid container justifyContent="space-between" alignItems="center" sx={{ padding: 5}}>
                    <Grid item>
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
                                    <Link component={NavLink} to="/disciplines/" variant="h6" color="text.primary" underline="hover">
                                        {item.title} 
                                    </Link>
                                
                                    <CardContent>
                                        <Typography sx={{ pb: 2 }} color="text.secondary">
                                            {item.description}
                                        </Typography>
                                        <Grid container justifyContent="space-between" alignItems="center" sx={{gap: 1}}>
                                            <Grid item></Grid>
                                            <Grid item justifyContent="end">
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
                        <div 
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                
                            }}
                        >
                        </div>
                    )
                }
            </Grid>
        </Container>
       
    );
}