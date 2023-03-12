import { useMemo } from "react";
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { ProgressPolymorphys } from "@/components/UI/ProgressPolymorphys";
import { WrapperEditIcon } from "./theme/theme";
import { TableBox, RolComponent } from "./theme/theme";
import { Edit } from '@mui/icons-material';

function Table({ data, visible_fields }: { data?: any, visible_fields: any }) {

    const columnsData = visible_fields!.map((e: any) => {
        let ExtrasActions = {} as Partial<MRT_ColumnDef>;
        if (e.header === 'roles' || e.header === 'rol') {
            ExtrasActions = {
                Cell: ({ cell, column, row, table, }) => {
                    if (Array.isArray(cell.getValue<any>())) {
                        return (
                            <WrapperEditIcon>
                                {(cell.getValue() as any).map((c: any, index: any) => {
                                    return <RolComponent key={index}>
                                        {c}
                                    </RolComponent>
                                })}
                                <Edit />
                            </WrapperEditIcon>
                        )
                    }
                    return (
                        <WrapperEditIcon>
                            <RolComponent>
                                {cell.getValue<any>().name}
                            </RolComponent>
                            <Edit />
                        </WrapperEditIcon>
                    )
                },
                size: 500,
                enableEditing: true,
                enableGrouping: true,
                Filter({ column, header, rangeFilterIndex, table, }) {
                    return ""
                },
            }
        }
        return {
            ...ExtrasActions,
            header: e.header.charAt(0).toUpperCase().concat(e.header.substring(1, e.length)),
            accessorKey: e.access,
            muiTableBodyCellProps: ({ cell }) => ({
                onClick: () => {
                    console.log(cell.row);
                },
            }),
        } as MRT_ColumnDef
    });

    const columns = useMemo<MRT_ColumnDef[]>(
        () => columnsData.filter((column: any) => visible_fields!.map((v: any) => v.header).includes(column!.accessorKey as any)),
        [],
    );

    return (

        <TableBox height="auto" >
            {
                data === undefined ? <ProgressPolymorphys type="circular" /> : <MaterialReactTable
                    manualExpanding={true}
                    columns={columns}
                    data={data ? data : []}
                    enableColumnActions={true}
                    enableColumnFilters={true}
                    enablePagination={true}
                    enableSorting={true}
                    enableBottomToolbar={true}
                    enableTopToolbar={true}
                    enableFilters={true}
                    enableColumnOrdering={true}
                    muiTableBodyRowProps={{ hover: true }}
                    pageCount={15}
                    enableRowActions={true}
                />
            }

        </TableBox>

    );
}

export { Table };
