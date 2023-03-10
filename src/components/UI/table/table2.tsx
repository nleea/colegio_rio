import { useMemo } from "react";
import MaterialReactTable, { MRT_ColumnDef } from 'material-react-table';
import { ProgressPolymorphys } from "@/components/UI/ProgressPolymorphys";
import { WrapperEditIcon } from "./theme/theme";
import { TableBox, RolComponent } from "./theme/theme";
import { Edit } from '@mui/icons-material';

function Table({ data, visible_fields, modalOpen, viewData }: { data?: any, visible_fields: any, modalOpen?: () => void, viewData?: (props: any) => void }) {

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
                muiTableBodyCellProps: ({ cell }) => ({
                    onClick: () => {
                        if (modalOpen) modalOpen();
                        if (viewData) viewData(cell.getValue() as any);
                    },
                }),
                filterVariant: "text",
                columnFilterModeOptions: ['fuzzy', 'contains', 'startsWith', 'between', 'lessThan', 'greaterThan']
            }
        }
        return {
            ...ExtrasActions,
            header: e.header.charAt(0).toUpperCase().concat(e.header.substring(1, e.length)),
            accessorKey: e.access,
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
                    enableColumnOrdering={false}
                    muiTableBodyRowProps={{ hover: true }}
                    pageCount={15}
                    initialState={{ showColumnFilters: false }}
                    enableColumnFilterModes
                />
            }
        </TableBox>
    );
}

export { Table };
