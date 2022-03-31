import { useEffect, useState } from 'react';

import { Box, Container, Grid, Card, CardHeader, CardContent, Divider } from '@mui/material';

import { ApiService } from '../../services/ApiService';
import { useNavigate } from 'react-router-dom';
import { ButtonCustom } from '../../ui/styles/components/Button';
import { TextFieldCustom } from '../../ui/styles/components/TextField';

interface StudentProps {
    id?: string;
    type: string;
}

export const FormStudent: React.FC<StudentProps> = (props) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cpf, setCpf] = useState('');
    const [phone, setPhone] = useState('');

    const [requisition, setRequisition] = useState('Registrar');
    const [disabled, setDisabled] = useState(false);

    let navigate = useNavigate();
    
    const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleChangeCpf = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCpf(event.target.value);
    };

    const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };

    function handleGetStudent(idStudent: string){
        ApiService
            .get(`/students/${idStudent}`)
            .then((response) => {
                setId(response.data.id);
                setName(response.data.name);
                setEmail(response.data.email); 
                setCpf(response.data.cpf);
                setPhone(response.data.phone);
            })
            .catch((error) => {
                console.log(`Falha ao tentar recuperar o aluno!\n Erro: ${error}`);
            });
    }

    function handlePostSubmit(){
        ApiService
            .post("/students", {
                "name": name,
                "email": email,
                "cpf": cpf,
                "phone": phone,            
            })
            .catch((error) => {
                console.log(`Falha ao tentar ${requisition} o aluno!\n Erro: ${error}`);
            });
    }

    function handlePutSubmit(){
        ApiService
            .put(`/students/${id}`, {
                "name": name,
                "email": email,
                "cpf": cpf,
                "phone": phone,            
            })
            .catch((error) => {
                console.log(`Falha ao tentar ${requisition} o aluno!\n Erro: ${error}`);
            });
    }

    function handleIsValid(){
        if( name != "" && email != "" && cpf != "" && phone != "" ){
            if(props.id){
                handlePutSubmit();
            }
            else{
                handlePostSubmit();
            }
            navigate(`/students/`);
        }
    }

    useEffect(() => {
        if(props.type === 'modify'){
            setRequisition("Alterar")
            props.id ? handleGetStudent(props.id) : console.log("Falha ao tentar recuperar o id do aluno!\n") 
        }
        else if(props.type === 'read'){
            setDisabled(true)
            setRequisition("Visualizar")
            props.id ? handleGetStudent(props.id) : console.log("Falha ao tentar recuperar o id do aluno!\n") 
        }
    }, []);

    return (
        <Container>
            <Grid spacing={3}>
                <Grid item xs={12}  sx={{ marginTop: 5 }} >
                    <Card
                        sx={{
                            backgroundColor: '#151C46',
                            border: 1,
                            borderColor: '#48539b',
                        }}    
                    >
                        <CardHeader sx={{ color: 'white' }} title={requisition + " " +"Aluno"} />

                        <Divider sx={{ borderColor: '#48539b' }} />
                        <CardContent>
                            <Box component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }}} noValidate autoComplete="off" >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextFieldCustom                                            
                                            required
                                            disabled={disabled}
                                            id="id_name"
                                            label="Nome"
                                            type="text"
                                            value={name}
                                            defaultValue={name}
                                            onChange={handleChangeName}
                                            error={name === '' ? true : false}
                                            helperText={name === '' ? 'Preencha o Nome' : ''}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextFieldCustom                                            
                                            required
                                            disabled={disabled}
                                            id="id_email"
                                            label="E-mail"
                                            type="email"
                                            value={email}
                                            defaultValue={email}
                                            onChange={handleChangeEmail}
                                            error={email === '' ? true : false}
                                            helperText={email === '' ? 'Preencha o E-mail' : ''}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextFieldCustom                                            
                                            required
                                            disabled={disabled}
                                            id="id_cpf"
                                            label="Cpf"
                                            type="text"
                                            value={cpf}
                                            defaultValue={cpf}
                                            onChange={handleChangeCpf}
                                            error={cpf === '' ? true : false}
                                            helperText={cpf === '' ? 'Preencha o Cpf' : ''}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextFieldCustom                                            
                                            required
                                            disabled={disabled}
                                            id="id_phone"
                                            label="Celular"
                                            type="phone"
                                            value={phone}
                                            defaultValue={phone}
                                            onChange={handleChangePhone}
                                            error={phone === '' ? true : false}
                                            helperText={phone === '' ? 'Preencha o Celular' : ''}
                                        />
                                    </Grid>

                                    {!disabled ? (
                                        <Grid container justifyContent={'center'} spacing={3}>
                                            <Grid item>
                                                <ButtonCustom variant="contained"
                                                    sx={{
                                                        mt: { xs: 2, md: 0 }, 
                                                        backgroundColor: '#7063C0',
                                                        '&:hover': {
                                                            background: '#6153bb' ,
                                                            opacity: 0.5
                                                        },
                                                    }}
                                                    onClick={() => {
                                                        navigate(`/students`);
                                                    }}
                                                >
                                                    Voltar
                                                </ButtonCustom>
                                            </Grid>
                                        
                                            <Grid item>
                                                <ButtonCustom variant="contained"
                                                    sx={{
                                                        mt: { xs: 2, md: 0 }, 
                                                        backgroundColor: '#7063C0',
                                                        '&:hover': {
                                                            background: '#6153bb' ,
                                                            opacity: 0.5
                                                        },
                                                    }}
                                                    onClick={() => {
                                                        handleIsValid()
                                                    }}
                                                >
                                                    {requisition}
                                                </ButtonCustom>
                                            </Grid>
                                        </Grid> 
                                    ) : ( <> </> )}
                                </Grid>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}