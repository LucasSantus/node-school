import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import './App.css';

import { Typography, Container, Grid } from '@mui/material';

import CardCustom from "./components/Card";

const Main = styled(Container)(({ theme }) => ({
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
}));

interface Item {
    name: string;
}

function App() {

    const [items, setItem] = useState<Item[]>([]);

    // setItem(
        
    // )

    return (
        <>
            <Main maxWidth="xl">
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
                                <Typography component="h6">
                                    {item.name}
                                </Typography>
                            </Grid>
                        ))) : (
                            <Typography variant="h5" component="h6">
                                Não existem registros!
                            </Typography>
                        )
                    }
                </Grid>

                {/* <div className="App">
                    <header className="App-header">
                        <Grid
                            container 
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            rowSpacing={1} 
                            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                        >
                            <Grid item xs={4}>
                                <CardCustom title="HIHIHI" />
                            </Grid>
                            <Grid item xs={4}>
                                <CardCustom title="HAHAHAHHA" />
                            </Grid>
                            <Grid item xs={4}>
                                <CardCustom title="HOHOHO" />
                            </Grid>
                            <Grid item xs={4}>
                                <CardCustom title="HGJGFHDGFDH" />
                            </Grid>
                        </Grid>
                    </header>
                </div> */}
            </Main>
        </>
    );
}

export default App;