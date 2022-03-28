import { useState } from 'react';

import { Container, Typography, Grid, Button, Card, CardContent, IconButton, Link, Box, Chip, Divider, CardActions, AvatarGroup, Tooltip, Avatar, Paper, useMediaQuery, Stack } from '@mui/material';

import { ApiService } from "../services/ApiService";

import { useEffect } from "react";

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

import { DisciplineInterface } from '../types/types';

import { useNavigate } from "react-router-dom";

import Header from '../components/Header/Header';

import { ButtonCustom } from '../ui/styles/components/Button';
import { LinkTitleCardCustom } from '../ui/styles/components/Link';

export default function Dashboard(){
    const [disciplines, setDisciplines] = useState<DisciplineInterface[]>([]);

    let navigate = useNavigate();

    function handleLimitText(text: string){
        return text.slice(0, 100).concat('...');
    }
    
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
        <>
            <Header />

            <Container>
                <Grid
                    container 
                    spacing={3} 
                    paddingTop={5}
                >
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid 
                            item
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <Typography 
                                variant="h4" 
                                component="h4"
                                sx={{
                                    paddingLeft: 3,
                                }}
                            >
                                Disciplinas
                            </Typography>
                        </Grid>
                        <Grid item>
                            <ButtonCustom
                                variant="contained"
                                sx={{
                                    paddingLeft: 3
                                }}
                                onClick={() => {
                                    navigate(`/disciplines/new/`);
                                }}
                            >
                                Registrar Disciplina
                            </ButtonCustom>
                        </Grid>
                    </Grid>

                    {disciplines.length > 0 ? (
                        disciplines.map((item) => (
                            <>
                                <Grid item xs={12} md={4}>
                                    <Paper 
                                        elevation={3}
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                    >
                                        <Card
                                            sx={{
                                                backgroundColor: "#151c46",
                                                border: '1px solid',
                                                borderColor: '#48539b',
                                                height: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            <CardContent
                                                sx={{
                                                    height: '100%'
                                                }}
                                            > 
                                                <LinkTitleCardCustom 
                                                    variant="h6" 
                                                    color="text.primary" 
                                                    underline="hover"
                                                    onClick={() => {
                                                        navigate(`/disciplines/${item.id}`);
                                                    }}
                                                >
                                                    {item.title}
                                                </LinkTitleCardCustom>
                                                <Tooltip
                                                    title={item.description}
                                                >
                                                    <Typography sx={{ pb: 2, color: '#9395A2' }}>
                                                        {handleLimitText(item.description)}
                                                    </Typography>
                                                </Tooltip>
                                            </CardContent>
                                                <Divider 
                                                    sx={{
                                                        backgroundColor: '#48539b'
                                                    }}
                                                />
                                                <CardActions
                                                    sx={{
                                                        alignItems: 'center',
                                                        justifyContent: 'flex-end',
                                                    }}
                                                >
                                                <Typography
                                                    display="flex"
                                                    alignItems="center"
                                                    variant="subtitle2"
                                                >
                                                </Typography>
                                                <AvatarGroup>
                                                    <Tooltip arrow title="Editar Disciplina">
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
                                                    </Tooltip>
                                                    <Tooltip arrow title="Deletar Disciplina">
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
                                                    </Tooltip>
                                                </AvatarGroup>
                                            </CardActions>
                                        </Card>
                                    </Paper>
                                </Grid>
                            </>
                        ))) : (
                            <Box
                                sx={{
                                    display: 'flex',
                                    minWidth: '100%',
                                    minHeight: '80vh',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <Stack
                                    sx={{
                                        borderRadius: 6,
                                        border: 1,
                                        borderColor: '#272d4d',
                                        backgroundColor: '#191e3d',
                                        paddingX: 8,
                                        paddingY: 1,
                                    }}
                                >
                                    <h4>Não existem disciplinas registradas!</h4>
                                </Stack>
                            </Box>
                        )
                    }
                </Grid>
            </Container>
        </>
    );
}