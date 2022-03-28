import { useState } from 'react';

import { Container, Typography, Grid, Card, CardContent, IconButton, Box, Divider, CardActions, AvatarGroup, Tooltip, Paper, Stack } from '@mui/material';

import { useEffect } from "react";

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

import { useNavigate } from "react-router-dom";
import { STInterface } from '../../types/types';
import Header from '../../components/Header/Header';

import { ButtonCustom } from '../../ui/styles/components/Button';
import { LinkTitleCardCustom } from '../../ui/styles/components/Link';
import { ApiService } from '../../services/ApiService';

export default function ListTeachers(){
    const [teachers, setTeachers] = useState<STInterface[]>([]);

    let navigate = useNavigate();
 
    function handleFullName(firstName: string, lastName: string){
        return `${firstName} ${lastName}`
    }

    function handleGetAllTeachers(){
        ApiService
            .get("/teachers")
            .then((response) => {
                setTeachers(response.data);
            })
            .catch((error) => {
                console.log(`Ocorreu uma falha ao buscar os professores\n ${error}`);
            });
    }

    function handleModify(id: string){
        navigate(`/teachers/modify/${id}`)
    }

    function handleDelete(id: string){
        ApiService
            .delete(`/teachers/${id}`)
            .then(() => {
                handleGetAllTeachers();
            })
            .catch((error) => {
                console.log(`Ocorreu uma falha ao deletar o professor\n ${error}`);
            });
    }

    useEffect(() => {
        handleGetAllTeachers();
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
                                Alunos
                            </Typography>
                        </Grid>
                        <Grid item>
                            <ButtonCustom
                                variant="contained"
                                sx={{
                                    paddingLeft: 3
                                }}
                                onClick={() => {
                                    navigate(`/teachers/new`);
                                }}
                            >
                                Registrar Aluno
                            </ButtonCustom>
                        </Grid>
                    </Grid>

                    {teachers.length > 0 ? (
                        teachers.map((item) => (
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
                                                        navigate(`/teachers/${item.id}`);
                                                    }}
                                                >
                                                    {handleFullName(item.first_name, item.last_name)}
                                                </LinkTitleCardCustom>
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
                                                    <Tooltip arrow title="Editar Aluno">
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
                                                            onClick={() => {
                                                                item.id ? handleModify(item.id) : console.log("Error")
                                                            }}
                                                        >
                                                            <EditTwoToneIcon fontSize="small" />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip arrow title="Deletar Aluno">
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
                                                        onClick={() => {
                                                            item.id ? handleDelete(item.id) : console.log("Error")
                                                        }}
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
                                    <h4>Não existem professores registrados!</h4>
                                </Stack>
                            </Box>
                        )
                    }
                </Grid>
            </Container>
        </>
    );
}