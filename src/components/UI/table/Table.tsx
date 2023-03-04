import { useMemo } from "react";
import { TableBox } from "./theme/theme";
import { DataGrid } from "@mui/x-data-grid";


interface ColumnType {
    field: string;
    headerName: string;
    width: number
}


export const Table = ({ data: d, visible_fields, load = false }: { data: any, visible_fields: any, load?: boolean }) => {

    const VISIBLE_FIELDS = visible_fields;

    const columnsData: ColumnType[] = VISIBLE_FIELDS!.map((e: string) => {
        return { field: e!, headerName: e?.charAt(0).toUpperCase() + e?.slice(1)!, width: 300 }
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
            <DataGrid  {...data} columns={columns} checkboxSelection filterMode="client" loading={load} />
        </TableBox>
    )
}