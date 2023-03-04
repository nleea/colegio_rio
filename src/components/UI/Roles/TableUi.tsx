import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'Permiso',
        headerName: 'Permiso',
        width: 150,
        editable: false,
        sortable: false,
    },
    {
        field: 'Ver',
        headerName: 'Ver',
        width: 150,
        editable: false,
        sortable: false,
        renderCell: (params: any) => (
            <Switch {...label} defaultChecked />
        ),
    },
    {
        field: 'Crear',
        headerName: 'Crear',
        width: 150,
        editable: false,
        sortable: false,
        renderCell: (params: any) => (
            <Switch {...label} defaultChecked />
        ),
    },
    {
        field: 'Editar',
        headerName: 'Editar',
        width: 150,
        editable: false,
        sortable: false,
        renderCell: (params: any) => (
            <Switch {...label} defaultChecked />
        ),
    },
    {
        field: 'Eliminar',
        headerName: 'Eliminar',
        width: 150,
        editable: false,
        sortable: false,
        renderCell: (params: any) => (
            <Switch {...label} defaultChecked />
        ),
    },

];

const rows = [
    { id: 1, Permiso: 'Adminnistrador', Estado: 1 },
    { id: 2, Permiso: 'Usuario', Estado: 1 },
    { id: 3, Permiso: 'Rol', Estado: 1 },
    { id: 4, Permiso: 'Notas', Estado: 1 },
    { id: 5, Permiso: 'Noticias', Estado: 1 },
];

export function TableUi() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                experimentalFeatures={{ newEditingApi: false }}
            />
        </Box>
    );
}