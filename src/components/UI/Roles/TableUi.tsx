import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useId } from 'react';

import Switch from '@mui/material/Switch';


const label = { inputProps: { 'aria-label': 'Switch demo' } };

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'categoria',
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
            // console.log(params)
            if (params.row.permisos[0] != undefined && params.row.permisos[0].Permiso.includes('ver')) {
                return <Switch {...label} checked={params.row.permisos[0].estado} />
            } else {
                return <Switch {...label} checked={false} />
            }
        },
    },
    {
        field: 'Crear',
        headerName: 'Crear',
        width: 150,
        editable: false,
        sortable: false,
        renderCell: (params: any) => {
            if (params.row.permisos[1] != undefined && params.row.permisos[1].Permiso.includes('crear')) {
                return <Switch {...label} checked={params.row.permisos[1].estado} />
            } else {
                return <Switch {...label} checked={false} />
            }
        }
    },
    {
        field: 'Editar',
        headerName: 'Editar',
        width: 150,
        editable: false,
        sortable: false,
        renderCell: (params: any) => {
            if (params.row.permisos[2] != undefined && params.row.permisos[2].Permiso.includes('editar')) {
                return <Switch {...label} checked={params.row.permisos[2].estado} />
            } else {
                return <Switch {...label} checked={false} />
            }
        }
    },
    {
        field: 'Eliminar',
        headerName: 'Eliminar',
        width: 150,
        editable: false,
        sortable: false,
        renderCell: (params: any) => {
            if (params.row.permisos[3] != undefined && params.row.permisos[3].Permiso.includes('eliminar')) {
                return <Switch {...label} checked={params.row.permisos[3].estado} />
            } else {
                return <Switch {...label} checked={false} />
            }
        }
    },

];


export function TableUi({ allPermisos, hasPermisos }: { allPermisos: any, hasPermisos: any },) {

    let rows: any[] = [
        {
            id: 0,
            Permiso: 'rol',
            permisos: [
                { id: 1, name: 'ver', estado: true },
                { id: 2, name: 'crear', estado: false },
                { id: 3, name: 'editar', estado: true },
                { id: 4, name: 'eliminar', estado: false },
            ]
        },
        {
            id: 1,
            Permiso: 'estudiante',
            permisos: [
                { id: 1, name: 'ver', estado: false },
                { id: 2, name: 'crear', estado: true },
                { id: 3, name: 'editar', estado: false },
                { id: 4, name: 'eliminar', estado: true },
            ]
        },
    ]
    let currentPermisosId: any[] = []

    hasPermisos.map((permiso: any) => {
        currentPermisosId.push(permiso.permissions.id)
    })

    const permisosAgrupados: any = [];

    let indice = 1;

    allPermisos.forEach((permiso: any, index: number) => {
        const tipoExistente = permisosAgrupados.find((elemento: any) => elemento.categoria === permiso.categoria);

        if (tipoExistente) {
            if (currentPermisosId.includes(permiso.id)) {
                permisosAgrupados.map((elemento: any) => {
                    console.log(elemento) 
                    // if( currentPermisosId.includes( elemento.id)){
                    //     elemento.permisos.push({ id: permiso.id, Permiso: permiso.name, estado: true });
                    // }else{
                    //     elemento.permisos.push({ id: permiso.id, Permiso: permiso.name, estado: false });
                    // }
                })
            }

        } else {

            let nuevoTipo = {
                id: indice,
                categoria: permiso.categoria,
                permisos: [{ id: permiso.id, Permiso: permiso.name, estado: false }],
                indice: indice
            };

            permisosAgrupados.push(nuevoTipo);
            indice++;
        }
    });

    // console.log( currentPermisosId)
    // console.log(allPermisos)

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={permisosAgrupados}
                columns={columns}
            />
        </Box>
    );
}