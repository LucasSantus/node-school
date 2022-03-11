import { useState } from 'react';

import { Typography, Container, Grid } from '@mui/material';
import CardCustom from '../components/Card';

interface Item {
    name: string;
}

export default function Full(){
    const [items] = useState<Item[]>([
        { "name": "Irineu" }, { "name": "Jubileu" }, 
        { "name": "Jucelina" }, { "name": "Pipoca" }, 
        { "name": "Jubila" }, { "name": "Irinéia" }
    ]);

    return (
        <Container
            className="app-body" 
            maxWidth="xl"
        >
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
                            <CardCustom 
                                title={item.name}
                            />
                        </Grid>
                    ))) : (
                        <Typography variant="h5" component="h6">
                            Não existem registros!
                        </Typography>
                    )
                }
            </Grid>
        </Container>
    );
}