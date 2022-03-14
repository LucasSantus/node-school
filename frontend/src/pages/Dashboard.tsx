import { Link } from "react-router-dom";

import { useState } from 'react';

import { Typography, Container, Grid } from '@mui/material';

import CardCustom from '../components/Card';

import "./../ui/styles/pages/Dashboard.css"

interface Item {
    name: string;
}

export default function Dashboard(){
    const [items] = useState<Item[]>([
        { "name": "Irineu" }, { "name": "Jubileu" }, 
        { "name": "Jucelina" }, { "name": "Pipoca" }, 
        { "name": "Jubila" }, { "name": "Irinéia" }
    ]);

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
                {items.length > 0 ? (
                    items.map((item) => (
                        <Grid item xs={4}>
                            <Link 
                                to="/teams"
                                style={{ 
                                    textDecoration: 'none',
                                }}
                            >
                                <CardCustom 
                                    title={item.name}
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