import { useMemo } from "react";

import { Box, Paper } from "@mui/material";
import { GetAll } from "../../../service/hooks/GetAll";
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { Person } from "./data";
import { ProgressPolymorphys } from "../../../components/UI/ProgressPolymorphys";

function User() {

    const { state } = GetAll("users");

    const columns = useMemo<MRT_ColumnDef<Person>[]>(
        () => [
            {
                accessorKey: 'usuario',
                header: 'Usuario',
            },
            {
                accessorKey: 'nombre',
                header: 'Nombre',
            },
            {
                accessorKey: 'apellido',
                header: 'Apellido',
            },
            {
                accessorKey: 'email',
                header: 'Email',
            },
            {
                accessorKey: 'telefonomovil',
                header: 'Telefono',
            },
            {
                accessorKey: 'estado',
                header: 'Estado',
            },
            {
                accessorKey: 'fechanacimiento',
                header: 'Fecha de nacimiento',
            },

        ],
        [],
    );

    return (
        <Box maxHeight={"100%"} minHeight={"60%"} marginTop={"1.5rem"} maxWidth={"90%"} margin="auto" overflow={"auto"}  >
            <Paper elevation={2} sx={{ borderRadius: "20px" }} >

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
                    />
                }

            </Paper>
        </Box>
    );
}

export { User };
