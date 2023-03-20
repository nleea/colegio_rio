import Box from '@mui/material/Box';
import { useState } from 'react';

import { Controller } from 'react-hook-form'

import { DataGrid, GridColDef, GridValueSetterParams } from '@mui/x-data-grid';
import Switch from '@mui/material/Switch';
import { Button } from '@mui/material';


export function TableUi({ allPermisos, hasPermisos, register, control, handleClose }: { allPermisos: any, hasPermisos: any, register: any, control: any, handleClose: any },) {

    const permisosAgrupados: any = [];
    const permisosCreate: any = [];
    const permisosDelete: any = [];

    let currentPermisosId: any[] = []
    // let columsPermisos: GridColDef[] = permisosAgrupados.map((elemento: any) => {
    //     return {
    //         field: elemento.categoria,
    //         headerName: elemento.categoria,
    //         width: 150,
    //         editable: false,
    //         sortable: false,
    //         renderCell: (params: any) => {

    //         },
    //     }
    // })
    let indice = 1;

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
                if (params.row.permisos[0] != undefined && params.row.permisos[0].Permiso.includes('ver')) {
                    return <Controller control={control} name="ver" defaultValue={params.row.permisos[0].estado }  render={({ field }) => <Switch {...field} defaultChecked={params.row.permisos[0].estado} />} />
                } else {
                    return <Controller control={control} name="ver" defaultValue={params.row.permisos[0].estado} render={({ field }) => <Switch {...field} defaultChecked={false} />} />
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
                    return <Controller control={control} name="crear" defaultValue={params.row.permisos[1].estado} render={({ field }) => <Switch {...field} defaultChecked={params.row.permisos[1].estado} />} />
                } else {
                    return <Controller control={control} name="crear" defaultValue={false} render={({ field }) => <Switch {...field} defaultChecked={false} />} />
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
                    return <Controller control={control} name="editar" defaultValue={params.row.permisos[2].estado} render={({ field }) => <Switch {...field} defaultChecked={params.row.permisos[2].estado} />} />
                } else {
                    return <Controller control={control} name="editar" defaultValue={false} render={({ field }) => <Switch {...field} defaultChecked={false} />} />
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
                if (params.row.permisos[3] != undefined && params.row.permisos[3].Permiso.includes('borrar')) {
                    return <Controller control={control} name="borrar" defaultValue={params.row.permisos[3].estado} render={({ field }) => <Switch {...field} defaultChecked={params.row.permisos[3].estado} />} />
                } else {
                    return <Controller control={control} name="borrar" defaultValue={false} render={({ field }) => <Switch {...field} defaultChecked={false} />} />
                }
            }
        },

    ];

    hasPermisos.map((permiso: any) => {
        currentPermisosId.push(permiso.permissions.id)
    })

    allPermisos.forEach((permiso: any) => {
        const tipoExistente = permisosAgrupados.find((elemento: any) => elemento.categoria === permiso.categoria);

        if (tipoExistente) {
            permisosAgrupados.map((elemento: any) => {

                if (currentPermisosId.includes(permiso.id) && tipoExistente.categoria === elemento.categoria) {
                    elemento.permisos.push({ id: permiso.id, Permiso: permiso.name, categoria: permiso.categoria, estado: true });
                } else if (tipoExistente.categoria === elemento.categoria) {
                    elemento.permisos.push({ id: permiso.id, Permiso: permiso.name, categoria: permiso.categoria, estado: false });
                }
            })
        } else {
            let nuevoTipo = {
                id: indice,
                categoria: permiso.categoria,
                permisos: [{ id: permiso.id, Permiso: permiso.name, categoria: permiso.categoria, estado: currentPermisosId.some((elemento: any) => elemento === permiso.id) }],

            };

            permisosAgrupados.push(nuevoTipo);
            indice++;
        }
    });


    console.log(permisosAgrupados)

    const onSubmit = (n: any) => {
        console.log(n)
        // console.log(permisosAgrupados)

        // let data = {
        //     "name": "Profesor",
        //     "role_has_permissions_delete": [],
        //     "role_has_permissions_create": [
        //         {
        //             "permission_id": 4
        //         }
        //     ]
        // }
    }

    const handleCellEditCommit = (params: any) => {


        // if (params.field === "active") {
        //     console.log(params.value); // <-- Obtener el valor del Switch
        // }
        console.log(params);
        // console.log( params )
        // hasFocus
        // id
        // if (e.hasFocus === true) permisosDelete.push(e.id)


        // console.log(permisosDelete)
    };

    return (
        <>
            <Box sx={{ height: 400, width: '100%' }}>
                <DataGrid
                    rows={permisosAgrupados}
                    columns={columns}
                    onCellClick={handleCellEditCommit}
                // onCellEditCommit={handleCellEditCommit}
                />
            </Box>

            <Box
                sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
            >
                <Button onClick={onSubmit} variant="contained" color="success" sx={{ my: 3, mx: 3, }}>
                    Guardar
                </Button>
                <Button variant="contained" color="inherit" sx={{ my: 3, mx: 3, }} onClick={handleClose}>
                    Cancelar
                </Button>
            </Box>
        </>
    );
}