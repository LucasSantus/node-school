import { Link } from "react-router-dom";

import { useState } from 'react';

import { Container, Grid } from '@mui/material';

import CardCustom from '../components/Card';

import "./../ui/styles/pages/Dashboard.css"

import { useEffect } from "react";

export default function Dashboard(){
    const [disciplines, setDisciplines] = useState<DisciplineInterface[]>([]);

    useEffect(() => {
        ApiService
            .get("/disciplines")
            .then((response) => {
                setDisciplines(response.data)
            })
            .catch((err) => {
                alert("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <Container>
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
            </Grid>
        </Container>
    );
}

git commit -m ":rocket: making changes to the design.

backend
    - add Cors project

    - modifying .env
    - modifying docker-compose.yml
    - modifying package-lock.json
    - modifying package.json
    - modifying src/server.ts
    - modifying yarn.lock
    
        modified:   frontend/package-lock.json
        modified:   frontend/package.json
        modified:   frontend/src/pages/Dashboard.tsx

        frontend/DataGrid.tsx
        frontend/src/pages/Discipline/
        frontend/src/services/
        frontend/src/types/