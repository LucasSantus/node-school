import { Link } from "react-router-dom";

import { useState } from 'react';

import { Container, Grid } from '@mui/material';

import CardCustom from '../components/Card';

import "./../ui/styles/pages/Dashboard.css"

import { ApiService } from "../services/ApiService";
import DisciplineInterface from "../types/discipline.type";
import { useEffect } from "react";
import DataGridCustom from "../components/DataGrid";

export default function Dashboard(){
    const [disciplines, setDisciplines] = useState<DisciplineInterface[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        ApiService
            .get("/disciplines")
            .then((response) => {
                setDisciplines(response.data);
                setLoading(false);
            })
            .catch((err) => {
                
            });
    }, []);

    return (
        <Container>
            <DataGridCustom
                title={"Não existem registros!"}
                loading={loading}
            />
{/*             
            <Grid
                container 
                direction="row"
                justifyContent="center"
                alignItems="center"
                rowSpacing={1} 
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {disciplines.length > 0 ? (
                    disciplines.map((item) => (
                        <Grid item xs={4}>
                            <Link 
                                to="/teams"
                                style={{ 
                                    textDecoration: 'none',
                                }}
                            >
                                <CardCustom 
                                    title={item.title}
                                />
                            </Link>
                        </Grid>
                    ))) : (
                        <div 
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                height: '95vh'
                            }}
                        >
                            <CardCustom 
                                title={"Não existem registros!"}
                            />
                        </div>
                    )
                }
            </Grid> */}
        </Container>
    );
}