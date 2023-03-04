import { useMemo } from "react";
import { TableBox, RolComponent } from "./theme/theme";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";

interface ColumnType {
    field: string;
    headerName: string;
    width: number;
}


type a = ColumnType & GridColDef;

export const Table = ({ data: d, visible_fields, load = false, checkboxSelect = false }: { data: any, visible_fields: any, load?: boolean, checkboxSelect?: boolean }) => {

    const VISIBLE_FIELDS = visible_fields;

    const columnsData: a[] = VISIBLE_FIELDS!.map((e: string) => {
        let ExtrasActions = {} as a;
        if (e === 'roles' || e === 'rol') {
            ExtrasActions = {
                renderCell: (params: GridRenderCellParams) => {
                    if (typeof (params.value) === typeof ([])) {
                        return params.value.map((c: any, index: any) => {
                            return <RolComponent key={index}>
                                {c}
                            </RolComponent>
                        })
                    }
                    return (
                        <RolComponent>
                            {params.value}
                        </RolComponent>
                    )
                }
            } as a
        }
        return { ...ExtrasActions, field: e!, headerName: e?.charAt(0).toUpperCase() + e?.slice(1)!, width: 300 } as a
    });

    const data = {
        rows: d ? d : []
    }

    const columns: ColumnType[] = useMemo(
        () => columnsData.filter((column) => VISIBLE_FIELDS!.includes(column!.field as any)),
        [columnsData],
    );

    return (
        <TableBox>
            <DataGrid  {...data} columns={columns} checkboxSelection={checkboxSelect} filterMode="server" loading={load} />
        </TableBox>
    )
}