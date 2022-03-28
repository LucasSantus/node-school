import { useEffect, useState } from 'react';

import { Box, Container, Grid, Button, Card, CardHeader, CardContent, Divider, MenuItem, useTheme } from '@mui/material';

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
    let navigate = useNavigate();

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [teacherId, setTeacherId] = useState('');
    const [studentsId, setStudentsId] = useState<String>('');

    const [titleIsValid, setTitleIsValid] = useState(false);
    const [descriptionIsValid, setDescriptionIsValid] = useState(false);
    const [teacherIdIsValid, setTeacherIdIsValid] = useState(false);

    const [teachers, setTeachers] = useState<STInterface[]>([]);
    const [students, setStudents] = useState<STInterface[]>([]);

    const [selectStudents, setSelectStudents] = useState<string[]>([]);

    const [requisition, setRequisition] = useState('Registrar');

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

    // const handleChangeStudentsId = (event: SelectChangeEvent<typeof selectStudents>) => {
    //     const {
    //         target: { value }
    //     } = event;

    //     setSelectStudents(
    //         typeof value === 'string' ? value.split(',') : value,
    //     );
    // };

    const handleChange = (event: SelectChangeEvent<typeof personName>) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
    

    // function handleStudents(){
    //     // const listNames = personName.split(", ")
    //     for(let name in listNames){

    //         let result = students.find( student => student.first_name === name );
            
    //         result ? setStudentsId(result.id!) : console.log("aaaaa");

    //         alert(name)        
    //     }
    // }

    function handleGetAllStudents(){
        ApiService
            .get("/students")
            .then((response) => {
                setStudents(response.data);
            })
            .catch((error) => {
                console.log(`Ocorreu uma falha ao buscar os alunos\n ${error}`);
            });
    }

    function handleGetDiscipline(idDiscipline: string){
        ApiService
            .get(`/disciplines/${idDiscipline}`)
            .then((response) => {
                setId(response.data.id);
                setTitle(response.data.title);
                setDescription(response.data.description);
                setTeacherId(response.data.teacher_id); 
                setStudentsId(response.data.student_id);
            })
            .catch((error) => {
                console.log(`Ocorreu uma falha ao buscar a disciplina\n ${error}`);
            });
    }
    
    // function handleGetIdStudents(names: string[]){
    //     ApiService
    //         .get(`/students/${names}`)
    //         .then((response) => {
    //             // setStudentsId(response.data);
    //             alert(response.data)
    //         })
    //         .catch((error) => {
    //             console.log(`Ocorreu uma falha ao buscar os ids dos alunos\n ${error}`);
    //         });
    // }


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

    function handleSubmit(){
        ApiService
            .post("/disciplines", {
                "title": title,
                "description": description,
                "teacher_id": teacherId,
                "student_id": studentsId
            })
            .catch((error) => {
                console.log(`Ocorreu uma falha ao ${requisition} o professor\n ${error}`);
            });
            navigate(`/disciplines`);
    }

    function handleIsValid(){
        title === "" ? setTitleIsValid(false) : setTitleIsValid(true);
        description === "" ? setDescriptionIsValid(false) : setDescriptionIsValid(true);
        teacherId === "" ? setTeacherIdIsValid(false) : setTeacherIdIsValid(true);
        // studentsId === "" ? setStudentsIdIsValid(false) : setStudentsIdIsValid(true);

        alert(teacherId)

        // handleStudents()
        // alert(personName)

        // if( titleIsValid && descriptionIsValid && teacherIdIsValid ){
        //     handleSubmit();
        // }
    }

    const handleChangeStudentsId = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const { options } = event.target;
        const value: string[] = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
          if (options[i].selected) {
            value.push(options[i].value);
          }
        }
        // setStudentsId(value!);
      };

    function handleFullName(first_name: string, last_name: string){
        return `${first_name} ${last_name}`
    }

    useEffect(() => {
        handleGetAllTeachers();
        handleGetAllStudents();

        if(props.type === 'modify'){
            setRequisition("Alterar")
            props.id ? handleGetDiscipline(props.id) : console.log("não foi possível recuperar a disciplina!") 
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
                            title={requisition + " " +"Disciplina"} 
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
                                        {/* <TextFieldCustom
                                            required
                                            id="id_teacherId"
                                            label="Professor"
                                            type="text"
                                            value={teacherId}
                                            defaultValue={teacherId}
                                            onChange={handleChangeTeacherId}
                                            error={teacherId === '' ? true : false}
                                            helperText={teacherId === '' ? 'Preencha o Professor' : ''}
                                        /> */}

                                        <TextFieldCustom
                                            id="outlined-select-currency"
                                            select
                                            label="Professor"
                                            // value={handleChangeTeacherId}
                                            onChange={handleChangeTeacherId}
                                            // helperText="Please select your currency"
                                        >
                                            {teachers.map((item) => (
                                                <MenuItem key={item.id} value={item.id}>
                                                    {item.first_name} {item.last_name}
                                                </MenuItem>
                                            ))}
                                        </TextFieldCustom>
                                    </Grid>

                                    <Grid item xs={12}>
                                    <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
        <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={
                <OutlinedInput id="select-multiple-chip" label="Chip" />
                }
            renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {
                    selected.map((value) => (
                        <Chip key={value} label={value} />
                    ))
                    }
                </Box>
            )}
            MenuProps={MenuProps}
        >
          {students.map((item) => (
            <MenuItem
              key={item.id}
              value={item.id}
            >
              {item.first_name}
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