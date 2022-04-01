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
 
    function handleGetAllTeachers(){
        ApiService
            .get("/teachers")
            .then((response) => {
                setTeachers(response.data);
            })
            .catch((error) => {
                console.log(`Falha ao tentar recuperar os professores!\n Erro: \n ${error}`);
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
                console.log(`Falha ao tentar deletar o professor!\n Erro: ${error}`);
            });
    }

    useEffect(() => {
        handleGetAllTeachers();
    }, [teachers]);

    return (
        <>
            <Header />

            <Container>
                <Grid container spacing={3} paddingTop={5}>
                    <Grid container justifyContent="space-between" alignItems="center">
                        <Grid item
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                            }}
                        >
                            <Typography  variant="h4" component="h4" sx={{ marginLeft: 3 }} >
                                Professores
                            </Typography>
                        </Grid>
                        <Grid item>
                            <ButtonCustom variant="contained" sx={{ marginLeft: 3}}
                                onClick={() => {
                                    navigate(`/teachers/new`);
                                }}
                            >
                                Registrar Professor
                            </ButtonCustom>
                        </Grid>
                    </Grid>

                    {teachers.length > 0 ? (
                        teachers.map((item) => (
                            <Grid item xs={12} md={4} key={item.id}>
                                <Paper elevation={3}
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
                                        <CardContent sx={{ height: '100%' }} > 
                                            <LinkTitleCardCustom variant="h6" color="text.primary" underline="hover"
                                                onClick={() => {
                                                    navigate(`/teachers/read/${item.id}`);
                                                }}
                                            >
                                                {item.name}
                                            </LinkTitleCardCustom>
                                        </CardContent>
                                            <Divider sx={{ backgroundColor: '#48539b' }} />

                                            <CardActions sx={{ alignItems: 'center', justifyContent: 'flex-end' }} >

                                            <Typography display="flex" alignItems="center" variant="subtitle2" ></Typography>

                                            <AvatarGroup>
                                                <Tooltip arrow title="Editar Professor">
                                                    <IconButton color="inherit" size="small"
                                                        sx={{
                                                            '&:hover': {
                                                                background: '#070C27',
                                                                opacity: 0.5
                                                            },
                                                            color: 'green'
                                                        }}
                                                        onClick={() => {
                                                            item.id ? handleModify(item.id) : console.log("Falha ao tentar chamar função de modificar professor!")
                                                        }}
                                                    >
                                                        <EditTwoToneIcon fontSize="small" />
                                                    </IconButton>
                                                </Tooltip>
                                                <Tooltip arrow title="Deletar Professor">
                                                    <IconButton color="inherit" size="small"
                                                        sx={{
                                                            '&:hover': { 
                                                                background: '#070C27',
                                                                opacity: 0.5
                                                            },
                                                            color: 'red'
                                                        }}
                                                        onClick={() => {
                                                            item.id ? handleDelete(item.id) : console.log("Falha ao tentar chamar função de deletar professor!")
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
                        ))) : (
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
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
                                    <h4>Não há professores registrados no sistema!</h4>
                                </Stack>
                            </Box>
                        )
                    }
                </Grid>
            </Container>
        </>
    );
}