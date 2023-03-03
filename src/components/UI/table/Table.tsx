import { useMemo, useEffect } from "react";
import { TableBox } from "./theme/theme";
import { DataGrid } from "@mui/x-data-grid";
import { GetAll } from "@/service/hooks/GetAll";
//{ field: 'name', headerName: 'Name', width: 300 }

interface ColumnType {
    field: string;
    headerName: string;
    width: number
}


export const Table = () => {

    const { state } = GetAll("/modulos")

    useEffect(() => {
        console.log(state)
    }, [])

    const VISIBLE_FIELDS = ['name', 'name1'];

    const columnsData: Array<ColumnType> = [
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'name1', headerName: 'Name1', width: 300 },
        { field: 'name2', headerName: 'Name2', width: 300 }
    ]

    const data = {
        rows: [
            {
                id: "ss",
                name: "sss",
                name1: "sss"
            },
            {
                id: "1",
                name: "sss",
                name1: "sss"
            },
            {
                id: "2",
                name: "sss",
                name1: "sss"
            }
        ]
    }


    const columns = useMemo(
        () => columnsData.filter((column: any) => VISIBLE_FIELDS.includes(column.field)),
        [columnsData],
    );

    return (
        <TableBox>
            <DataGrid  {...data} columns={columns} />
        </TableBox>
    )
}