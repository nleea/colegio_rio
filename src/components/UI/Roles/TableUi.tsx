import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useId } from 'react';

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
        renderCell: (params: any) => {
            // console.log(params.row.Estado)
            return <Switch {...label} defaultChecked />

        },
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

// const rows = [
//     { id: 1, Permiso: 'Adminnistrador', Estado: 1 },
//     { id: 2, Permiso: 'Usuario', Estado: 1 },
//     { id: 3, Permiso: 'Rol', Estado: 1 },
//     { id: 4, Permiso: 'Notas', Estado: 1 },
//     { id: 5, Permiso: 'Noticias', Estado: 1 },
// ];

export function TableUi({ allPermisos, hasPermisos }: { allPermisos: any, hasPermisos: any },) {

    let rows: any[] = []
    let currentPermisosId: any[] = []

    // console.log(allPermisos)
    // console.log(hasPermisos)

    hasPermisos.map((permiso: any) => {
        currentPermisosId.push(permiso.permissions.id)
    })


    allPermisos.map((permiso: any, index: number) => {
        // rows.push({ id: index + 1, Permiso: permiso.categoria, Estado: true })

        rows.push({ id: index + 1 , Permiso: permiso.categoria, Estado: true })
    })

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
            />
        </Box>
    );
}