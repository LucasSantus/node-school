import { ChangeEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid, Tab, Tabs } from '@mui/material';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import RecentOrders from 'src/content/applications/Transactions/RecentOrders';
import DataGridCustom from 'src/components/DataGrid/DataGrid';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

function ListInformations() {
    // const [disciplines, setDisciplines] = useState<DisciplineInterface[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // ApiService
        //     .get("/disciplines")
        //     .then((response) => {
        //         setDisciplines(response.data);
        //         setLoading(false);
        //     })
        //     .catch((err) => {
                
        //     });
    }, []);

    const columns: GridColDef[] = [
        {
            field: 'title',
            headerName: 'Título',
            flex: 0.4,
            minWidth: 200,
        },
        {
            field: 'description',
            headerName: 'Descrição',
            flex: 0.5,
            minWidth: 300,
        },    
        {
            field: 'teacher',
            headerName: 'Professor',
            flex: 0.3,
            minWidth: 200,
        },
    ];

    const rows = [
        { id: 1, title: 'Lannister', description: 'Cersei', teacher: 42 },
        { id: 2, title: 'Lannister', description: 'Jaime', teacher: 45 },
        { id: 3, title: 'Stark', description: 'Arya', teacher: 16 },
        { id: 4, title: 'Targaryen', description: 'Daenerys', teacher: 432 },
        { id: 5, title: 'Melisandre', description: 'dasdsa', teacher: 150 },
        { id: 6, title: 'Clifford', description: 'Ferrara', teacher: 44 },
        { id: 7, title: 'Frances', description: 'Rossini', teacher: 36 },
        { id: 8, title: 'Roxie', description: 'Harvey', teacher: 65 },
    ];

    return (
        <>
            <Helmet>
                <title>Tasks Dashboard</title>
            </Helmet>
    
            <Container maxWidth="lg">
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                >
                <Grid item xs={12}>
                        <DataGridCustom
                            title={"Não existem registros!"}
                            loading={loading}
                            // rows={rows}
                            // columns={columns}
                        />
                </Grid>
                </Grid>
            </Container>
        </>
    );
}

export default ListInformations;
