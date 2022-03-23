import { useState } from 'react';

import { Box, Container, Typography, Grid, Button, Card, CardHeader, CardContent, IconButton, Link, TextField, Divider } from '@mui/material';

import { useEffect } from "react";

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import MoreVertTwoToneIcon from '@mui/icons-material/MoreVertTwoTone';

import { NavLink } from 'react-router-dom';

export default function FormStudent(){
    const [id, setId] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    

    return (
        <Container>
            <Grid spacing={3}>
                <Grid item xs={12} 
    sx={{
        marginTop: 5
    }}
>
    <Card>
        <CardHeader title="Registrar Aluno" />
        <Divider />
        <CardContent>
            <Box
                component="form"
                sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <div>
                    <TextField
                        required
                        id="id_first_name"
                        label="Nome"
                    />
                    <TextField
                        required
                        id="id_last_name"
                        label="Sobrenome"
                    />
                    <TextField
                        required
                        id="id_email"
                        label="E-mail"
                    />
                </div>
                <Grid>
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
            </Box>
        </CardContent>
    </Card>
</Grid>
            </Grid>
        </Container>
       
    );
}