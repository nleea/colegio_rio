import { useEffect, useState, useMemo } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridRenderCellParams, GridColDef, GridColTypeDef } from '@mui/x-data-grid';
import { Switch } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { PostFetch } from "@/service/hooks/modules/PostData";
import { DeleteFetch } from "@/service/hooks/deleteData";


interface ColumnType {
    field: string;
    headerName: string;
    width: number;
}

type a = ColumnType & GridColDef & GridColTypeDef;

export function ModulesEdit({ viewData, visible_fields }: { viewData: any, visible_fields: any }) {
    const { data: renderData, isLoad, fetch } = PostFetch();
    const [rolDeleteData, setRolDelete] = useState<any[]>([]);
    const { fetch: deleteFetch } = DeleteFetch();
    const { register, handleSubmit, control } = useForm();
    const onSubmit = (data: any) => { fetch("modulos/roles/hash", data) };
    const rows: any = renderData ? renderData[0].modulos_has_role : []

    useEffect(() => {
        fetch("modulos/roles/hash", { "rolName": viewData[0] })
    }, []);

    const deleteRolHandler = async (e: any) => {
        await deleteFetch("modulos/delete/", { ...e, modulos: rolDeleteData });
        onSubmit(e)
        setRolDelete([]);
    }

    const VISIBLE_FIELDS = visible_fields;

    const columnsData: any[] = VISIBLE_FIELDS!.map((e: string) => {
        let ExtrasActions = {} as a;
        if (e === 'ver') {
            ExtrasActions = {
                renderCell: (params: GridRenderCellParams) => {
                    return <Controller control={control} name="switch" defaultValue={true} render={({ field }) => <Switch {...field} defaultChecked value={true} />} />
                },
                width: 300,
                editable: true
            } as a
        }
        return { ...ExtrasActions, field: e!, headerName: e?.charAt(0).toUpperCase() + e?.slice(1)!, width: ExtrasActions.width ? ExtrasActions.width : 300 } as any
    });

    const columns: a[] = useMemo(
        () => columnsData.filter((column) => VISIBLE_FIELDS!.includes(column!.field as any)),
        [columnsData],
    );

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("rolName")}  >
                    {
                        viewData.map((c: string) => (
                            <option value={c} key={c} >{c}</option>
                        ))
                    }
                </select>

                <input type="submit" />
            </form>
            <DataGrid
                rows={renderData === undefined ? [] : rows}
                columns={columns}
                loading={isLoad}
                onCellClick={(e) => {
                    if (e.field === "ver") {
                        if (e.row.id in rolDeleteData) {
                            const newArrray = rolDeleteData.filter((c) => c !== e.row.id);
                            setRolDelete(newArrray);
                        } else {
                            setRolDelete([...rolDeleteData, e.row.id])
                        }
                    }
                }}
            />

            <button type="submit" onClick={handleSubmit(deleteRolHandler)} >Save</button>
        </Box>
    );
}