import { useEffect, useState } from 'react';

import { Box, Container, Grid, Button, Card, CardHeader, CardContent, Divider } from '@mui/material';

import { ApiService } from '../../services/ApiService';
import { useNavigate } from 'react-router-dom';
import { TextFieldCustom } from '../../ui/styles/components/TextField';

interface TeacherProps {
    id?: string;
    type: string;
}

export const FormTeacher: React.FC<TeacherProps> = (props) => {
    const [id, setId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const [firstNameIsValid, setFirstNameIsValid] = useState(false);
    const [lastNameIsValid, setLastNameIsValid] = useState(false);
    const [emailIsValid, setEmailIsValid] = useState(false);

    const [requisition, setRequisition] = useState('Registrar');

    let navigate = useNavigate();
    
    const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    function handleGetStudent(idTeacher: string){
        ApiService
            .get(`/teachers/${idTeacher}`)
            .then((response) => {
                setId(response.data.id);
                setFirstName(response.data.first_name);
                setLastName(response.data.last_name);
                setEmail(response.data.email); 
            })
            .catch((error) => {
                console.log(`Ocorreu uma falha ao buscar o professor\n ${error}`);
            });
    }

    function handleSubmit(){
        ApiService
            .post("/teachers", {
                "first_name": firstName,
                "last_name": lastName,
                "email": email
            })
            .catch((error) => {
                console.log(`Ocorreu uma falha ao ${requisition} o professor\n ${error}`);
            });
            navigate(`/teachers`);
    }

    function handleIsValid(){
        firstName === "" ? setFirstNameIsValid(false) : setFirstNameIsValid(true);
        lastName === "" ? setLastNameIsValid(false) : setLastNameIsValid(true);
        email === "" ? setEmailIsValid(false) : setEmailIsValid(true);

        if( firstNameIsValid && lastNameIsValid && emailIsValid ){
            handleSubmit();
        }
    }

    useEffect(() => {
        if(props.type === 'modify'){
            setRequisition("Alterar")
            props.id ? handleGetStudent(props.id) : console.log("não foi possível recuperar o professor!") 
        }
    }, []);

    return (
        <Container>
            <Grid spacing={3}>
                <Grid item xs={12}
                    sx={{
                        marginTop: 5
                    }}
                >
                    <Card
                        sx={{
                            backgroundColor: '#151C46',
                            border: 1,
                            borderColor: '#48539b',
                        }}    
                    >
                        <CardHeader 
                            sx={{
                                color: 'white'
                            }}
                            title={requisition + " " +"Professor"} 
                        />
                        <Divider 
                            sx={{
                                borderColor: '#48539b',
                            }}
                        />
                        <CardContent>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextFieldCustom
                                            color='secondary'
                                            required
                                            id="id_firstName"
                                            label="Nome"
                                            type="text"
                                            value={firstName}
                                            defaultValue={firstName}
                                            onChange={handleChangeFirstName}
                                            error={firstName === '' ? true : false}
                                            helperText={!firstNameIsValid ? 'Preencha o Nome' : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextFieldCustom
                                            required
                                            id="id_lastName"
                                            label="Sobrenome"
                                            type="text"
                                            value={lastName}
                                            defaultValue={lastName}
                                            onChange={handleChangeLastName}
                                            error={lastName === '' ? true : false}
                                            helperText={!lastNameIsValid ? 'Preencha o Sobrenome' : ''}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextFieldCustom
                                            required
                                            id="id_email"
                                            label="E-mail"
                                            type="email"
                                            value={email}
                                            defaultValue={email}
                                            onChange={handleChangeEmail}
                                            error={email === '' ? true : false}
                                            helperText={!emailIsValid ? 'Preencha o E-mail' : ''}
                                        />
                                    </Grid>
                                    <Grid container justifyContent={'center'} spacing={3}>
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
                                                    navigate(`/teachers`);
                                                }}
                                            >
                                                Voltar
                                            </Button>
                                        </Grid>
                                    
                                        <Grid item>
                                            <Button
                                                sx={{ 
                                                    // mt: { xs: 2, md: 0 }, 
                                                    backgroundColor: '#7063C0',
                                                    '&:hover': {
                                                        background: '#6153bb' ,
                                                        opacity: 0.5
                                                    },
                                                }}
                                                variant="contained"
                                                onClick={() => {
                                                    handleIsValid()
                                                }}
                                            >
                                                {requisition}
                                            </Button>
                                        </Grid>
                                    </Grid>            
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}