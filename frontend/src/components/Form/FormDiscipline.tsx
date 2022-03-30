import { useEffect, useState } from 'react';

import { Box, Container, Grid, Button, Card, CardHeader, CardContent, Divider, MenuItem } from '@mui/material';

import { ApiService } from '../../services/ApiService';
import { useNavigate } from 'react-router-dom';
import { TextFieldCustom } from '../../ui/styles/components/TextField';
import { STInterface } from '../../types/types';

import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Chip from '@mui/material/Chip';

interface DisciplineProps {
    id?: string;
    type: string;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export const FormDiscipline: React.FC<DisciplineProps> = (props) => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const [teacherId, setTeacherId] = useState('');
    const [studentsId, setStudentsId] = useState<STInterface[]>([]);

    const [studentsSelect, setStudentsSelect] = useState<STInterface[]>([]);

    const [requisition, setRequisition] = useState('Registrar');

    let navigate = useNavigate();

    const [teachers, setTeachers] = useState<STInterface[]>([]);
    const [students, setStudents] = useState<STInterface[]>([]);

    const [personName, setPersonName] = React.useState<string[]>([]);
  
    const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleChangeDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDescription(event.target.value);
    };

    const handleChangeTeacherId = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTeacherId(event.target.value);
    };

    const handleChangeStudents = (event: SelectChangeEvent<typeof personName>) => {
        const {
            target: { value },
        } = event;

        setPersonName(
            typeof value === 'string' ? value.split(',') : value,
        );
    };
    
    function handleGetDiscipline(idDiscipline: string){
        ApiService
            .get(`/disciplines/${idDiscipline}`)
            .then((response) => {
                setId(response.data.id);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setTeacherId(response.data.teacher_id); 
                
                const sa = response.data.students

                for(let nameStudent in sa){
                    console.log(nameStudent)
                }
                
            })
            .catch((error) => {
                console.log(`Falha ao tentar recuperar a disciplina!\n Erro: ${error}`);
            });
    }
    
    function handleGetAllTeachers(){
        ApiService
            .get("/teachers")
            .then((response) => {
                setTeachers(response.data);
            })
            .catch((error) => {
                console.log(`Falha ao tentar recuperar os professores!\n Erro: ${error}`);
            });
    }

    function handleGetAllStudents(){
        ApiService
            .get("/students")
            .then((response) => {
                setStudents(response.data);
            })
            .catch((error) => {
                console.log(`Falha ao tentar recuperar os alunos!\n Erro: ${error}`);
            });
    }

    function handleSubmit(){
        ApiService
            .post("/disciplines", {
                "title": title,
                "description": description,
                "teacher_id": teacherId,
                "student_id": personName
            })
            .catch((error) => {
                console.log(`Ocorreu uma falha ao ${requisition} o professor\n ${error}`);
            });
            navigate(`/`);
    }

    function handleIsValid(){
        if( title != "" && description != "" && teacherId != ""){
            handleSubmit();
        }
    }

    useEffect(() => {
        handleGetAllTeachers();
        handleGetAllStudents();

        if(props.type === 'modify'){
            setRequisition("Alterar")
            props.id ? handleGetDiscipline(props.id) : console.log(`Falha ao tentar recuperar o id da disciplina!\n`) 
        }

        console.log(studentsSelect)
    }, []);

    return (
        <Container>
            <Grid spacing={3}>
                <Grid item xs={12} sx={{ marginTop: 5 }} >
                    <Card
                        sx={{
                            backgroundColor: '#151C46',
                            border: 1,
                            borderColor: '#48539b',
                        }}    
                    >
                        <CardHeader title={requisition + " " +"Disciplina"} sx={{ color: 'white' }} />
                        <Divider sx={{ borderColor: '#48539b' }} />
                        <CardContent>
                            <Box component="form" noValidate autoComplete="off"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                            >
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextFieldCustom
                                            fullWidth
                                            required
                                            id="id_title"
                                            label="Título"
                                            type="text"
                                            value={title}
                                            defaultValue={title}
                                            onChange={handleChangeTitle}
                                            error={title === '' ? true : false}
                                            helperText={title === '' ? 'Preencha o Título' : ''}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextFieldCustom
                                            fullWidth
                                            required
                                            multiline
                                            maxRows={6}
                                            id="id_description"
                                            label="Descrição"
                                            type="text"
                                            value={description}
                                            defaultValue={description}
                                            onChange={handleChangeDescription}
                                            error={description === '' ? true : false}
                                            helperText={description === '' ? 'Preencha o Descrição' : ''}
                                        />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextFieldCustom
                                            fullWidth
                                            id="id_teacher"
                                            select
                                            label="Professor"
                                            value={teacherId}
                                            onChange={handleChangeTeacherId}
                                            error={teacherId === '' ? true : false}
                                            helperText={teacherId === '' ? 'Selecione o Professor' : ''}
                                        >
                                            {teachers.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>
                                                    {item.name} {item.cpf}
                                                </MenuItem>
                                            ))}
                                        </TextFieldCustom>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <FormControl sx={{ m: 1, width: '100%' }}>
                                            <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
                                            <Select
                                                labelId="demo-multiple-chip-label"
                                                id="demo-multiple-chip"
                                                multiple
                                                value={personName}
                                                onChange={handleChangeStudents}
                                                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                                                renderValue={(selected) => (
                                                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                                        {selected.map((value) => (
                                                            <Chip key={value} label={value} />
                                                        ))}
                                                    </Box>
                                                )}
                                                MenuProps={MenuProps}
                                            >
                                            {students.map((item) => (
                                                <MenuItem key={item.id} value={item.name} >
                                                    {item.name}
                                                </MenuItem>
                                            ))}
                                            </Select>
                                        </FormControl>
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
                                                    navigate(`/`);
                                                }}
                                            >
                                                Voltar
                                            </Button>
                                        </Grid>
                                    
                                        <Grid item>
                                            <Button
                                                sx={{
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