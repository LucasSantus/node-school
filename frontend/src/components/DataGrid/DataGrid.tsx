import * as React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

interface InterfaceRow {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
}

interface InterfaceDataGrid {
    title: string;
    loading: boolean;
    rows: InterfaceRow[];
    columns: GridColDef[];
}

const DataGridCustom: React.FC<InterfaceDataGrid> = (props) => {
    return (
        <div style={{ width: '100%', paddingTop: '30px' }}>
            <DataGrid
                rows={props.rows}
                columns={props.columns}
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