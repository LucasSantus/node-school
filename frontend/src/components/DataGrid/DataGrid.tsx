import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useEffect } from 'react';

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

interface InterfaceDataGrid {
    title: string;
    loading: boolean;
}

const DataGridCustom: React.FC<InterfaceDataGrid> = (props) => {
    return (
        <div style={{ width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                autoPageSize={true}
                rowsPerPageOptions={[5]}
                disableSelectionOnClick
                autoHeight={true}
                density={'standard'}
                disableColumnMenu={true}
                editMode={'cell'}
                loading={props.loading}
            />
        </div>
    );
}

export default DataGridCustom;