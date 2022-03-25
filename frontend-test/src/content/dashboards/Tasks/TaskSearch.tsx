import { useEffect, useRef, useState } from 'react';
import {
    Button,
    Card,
    Grid,
    Box,
    CardContent,
    Typography,
    Link,
    OutlinedInput,
    Menu,
    MenuItem,
    List,
    ListItem,
    ListItemText,
    IconButton
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Text from 'src/components/Text';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

import SettingsIcon from '@mui/icons-material/Settings';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import DisciplineInterface from 'src/types/discipline.type';
import { ApiService } from 'src/services/ApiService';

import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';

const ListWrapper = styled(Box)(
  ({ theme }) => `
        .MuiTouchRipple-root {
            display: none;
        }
        
        .MuiListItem-root {
            transition: ${theme.transitions.create(['color', 'fill'])};
            
            &.MuiListItem-indicators {
                padding: ${theme.spacing(1, 2)};
            
                .MuiListItemText-root {
                    .MuiTypography-root {
                        &:before {
                            height: 4px;
                            width: 22px;
                            opacity: 0;
                            visibility: hidden;
                            display: block;
                            position: absolute;
                            bottom: -10px;
                            transition: all .2s;
                            border-radius: ${theme.general.borderRadiusLg};
                            content: "";
                            background: ${theme.colors.primary.main};
                        }
                    }
                }

                &.active,
                &:active,
                &:hover {
                
                    background: transparent;
                
                    .MuiListItemText-root {
                        .MuiTypography-root {
                            &:before {
                                opacity: 1;
                                visibility: visible;
                                bottom: 0px;
                            }
                        }
                    }
                }
            }
        }
`
);

const OutlinedInputWrapper = styled(OutlinedInput)(
  ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);

function TaskSearch() {
    const ref = useRef<any>(null);
    const [isOpen, setOpen] = useState<boolean>(false);

    const handleOpen = (): void => {
        setOpen(true);
    };

    const handleClose = (): void => {
        setOpen(false);
    };

    const handleDelete = () => {
        
    };

    const handleClick = () => {
        
    };

    const periods = [
        {
        value: 'popular',
        text: 'Most popular'
        },
        {
        value: 'recent',
        text: 'Recent tasks'
        },
        {
        value: 'updated',
        text: 'Latest updated tasks'
        },
        {
        value: 'oldest',
        text: 'Oldest tasks first'
        }
    ];

    const actionRef1 = useRef<any>(null);
    const [openPeriod, setOpenMenuPeriod] = useState<boolean>(false);
    const [period, setPeriod] = useState<string>(periods[0].text);

    const [disciplines, setDisciplines] = useState<DisciplineInterface[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        ApiService
            .get("/disciplines")
            .then((response) => {
                setDisciplines(response.data);
            })
            .catch((err) => {
                
            });
    }, []);

  return (
    <>
        <Grid container spacing={3} sx={{paddingLeft: '30px'}}>
            <Grid container justifyContent="space-between" alignItems="center" sx={{marginLeft: 6}}>
                <Grid item>
                    <Typography variant="h2" component="h2" gutterBottom>
                        Disciplinas
                    </Typography>
                    <Typography variant="subtitle2">
                        Estas são as disciplinas recentes
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        sx={{ mt: { xs: 2, md: 0 } }}
                        variant="contained"
                    >
                        Cadastrar Disciplina
                    </Button>
                </Grid>
            </Grid>
                {disciplines.length > 0 ? (
                    disciplines.map((item) => (
                        <Grid container item xs={12} md={4}>
                            <Card sx={{ width: '100%', maxHeight: 'auto' }}>
                                <CardContent>
                                    <Link component={NavLink} to="/disciplines/datas/" variant="h3" color="text.primary" underline="hover">
                                        {item.title} 
                                    </Link>
                                    <Typography sx={{ pb: 2 }} color="text.secondary">
                                        {item.description}
                                    </Typography>
                                    <Grid container justifyContent="space-between" alignItems="center" sx={{gap: 1}}>
                                        <Grid item>

                                        </Grid>
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
                            </Card>
                        </Grid>
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
    </>
  );
}

export default TaskSearch;