import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { ApiService } from "../../services/ApiService";
import { STInterface } from "../../types/types";

const ListStudents: React.FC = (props) => {
    const [students, setStudents] = useState<STInterface[]>([]);
    const [exists, setExists] = useState(false);

    let navigate = useNavigate();

    function handleGetAllDisciplines(){
        ApiService
            .get("/students")
            .then((response) => {
                // setDisciplines(response.data);
                if(students.length > 0) setExists(true);
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
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                height={'95vh'}
            >

                {/* {exists ?
                    <Grid container justifyContent="space-between" alignItems="center">
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
                                onClick={() => {
                                    navigate(`/disciplines/new/`);
                                }}
                            >
                                Registrar Disciplina
                            </Button>
                        </Grid>
                    </Grid>
                :
                    <Box
                        sx={{
                            display: 'flex',
                            width: '100vh',
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
                            <h3>No momento não existem disciplinas registradas</h3>
                            <Grid
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Button
                                    sx={{
                                        width: '300px',
                                        backgroundColor: '#7063C0',
                                        '&:hover': {
                                            background: '#5849b8'
                                        },
                                    }}
                                    variant="contained"
                                    onClick={() => {
                                        navigate(`/students/new/`);
                                    }}
                                >
                                    Registrar Disciplina
                                </Button>
                            </Grid>
                        </Stack>
                    </Box>
                }

                {disciplines.length > 0 ? (
                    disciplines.map((item) => (
                        <Grid container item xs={12} md={4} sx={{ borderColor: 'white' }}>
                            <Grid container spacing={3}>
                                <Card sx={{
                                    width: '96%',
                                    paddingTop: 1
                                }}>
                                
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
                        <></>
                    ) */}
                {/* } */}
            </Grid>
        </Container>
    );
}

export default ListStudents;