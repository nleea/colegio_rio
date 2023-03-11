import { useMemo } from "react";

import { Paper } from "@mui/material";
import { GetAll } from "@/service/hooks/GetAll";
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { Person } from "./data";
import { ProgressPolymorphys } from "@/components/UI/ProgressPolymorphys";

function TableUser() {

    const { state } = GetAll<Person>("user");

    const columns = useMemo<MRT_ColumnDef<Person>[]>(
        () => [
            {
                accessorKey: 'username',
                header: 'Usuario'
            },
            {
                accessorKey: 'personas.nombre',
                header: 'Nombre',
            },
            {
                accessorKey: 'personas.apellido',
                header: 'Apellido',
            },
            {
                accessorKey: 'email',
                header: 'Email',
            },
            {
                accessorKey: 'personas.telefono',
                header: 'Telefono',
            },
            {
                accessorKey: 'estado',
                header: 'Estado',
            },
            {
                accessorKey: 'personas.fechanacimiento',
                header: 'Fecha de nacimiento',
            },

        ],
        [],
    );

    return (

        <Paper elevation={1} sx={{ width: "100%" }} >
            {
                state === undefined ? <ProgressPolymorphys type="circular" /> : <MaterialReactTable
                    manualExpanding={true}
                    columns={columns}
                    data={state}
                    enableColumnActions={true}
                    enableColumnFilters={false}
                    enablePagination={true}
                    enableSorting={true}
                    enableBottomToolbar={true}
                    enableTopToolbar={true}
                    muiTableBodyRowProps={{ hover: true }}
                    pageCount={15}
                />
            }

        </Paper>

    );
}

export { TableUser };