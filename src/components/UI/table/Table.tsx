import { useMemo } from "react";
import { TableBox, RolComponent } from "./theme/theme";
import { DataGrid, GridColDef, GridRenderCellParams, GridRowParams, GridColTypeDef } from "@mui/x-data-grid";
import { Edit } from '@mui/icons-material';
import { WrapperEditIcon } from "./theme/theme";

interface ColumnType {
    field: string;
    headerName: string;
    width: number;
}

type a = ColumnType & GridColDef & GridColTypeDef;

export const Table = ({ data: d, visible_fields, load = false, checkboxSelect = false, modalOpen, setViewData }: { data: any, visible_fields: any, load?: boolean, checkboxSelect?: boolean, modalOpen?: () => void, setViewData?: (data: any) => void }) => {
    const VISIBLE_FIELDS = visible_fields;

    const columnsData: a[] = VISIBLE_FIELDS!.map((e: string) => {
        let ExtrasActions = {} as a;
        if (e === 'roles' || e === 'rol') {
            ExtrasActions = {
                renderCell: (params: GridRenderCellParams) => {
                    if (typeof (params.value) === typeof ([])) {
                        return (
                            <WrapperEditIcon>
                                {params.value.map((c: any, index: any) => {
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
                                {params.value}
                            </RolComponent>
                            <Edit />
                        </WrapperEditIcon>
                    )
                },
                width: 300,
                editable: true,
                cellClassName: "rol-cell"
            } as a
        }
        return { ...ExtrasActions, field: e!, headerName: e?.charAt(0).toUpperCase() + e?.slice(1)!, width: ExtrasActions.width ? ExtrasActions.width : 300 } as a
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
            <DataGrid onCellClick={(e) => {
                if ((e.field === "rol" || e.field === "roles") && modalOpen && setViewData) {
                    modalOpen()
                    setViewData(e.value)
                }
            }}   {...data} columns={columns} checkboxSelection={checkboxSelect} filterMode="server" loading={load} style={{ borderRadius: "0" }} />
        </TableBox>

    )
}