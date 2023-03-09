import { useEffect, useState, useMemo } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridRenderCellParams, GridColDef, GridColTypeDef } from '@mui/x-data-grid';
import { Switch } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { PostFetch } from "@/service/hooks/modules/PostData";
import { DeleteFetch } from "@/service/hooks/deleteData";
import toast from "react-hot-toast";
import { Button } from "@/components/UI/button/index";

interface ColumnType {
    field: string;
    headerName: string;
    width: number;
}

type a = ColumnType & GridColDef & GridColTypeDef;

export const ModulesAdd = ({ viewData, visible_fields }: { viewData: any, visible_fields: any }) => {

    const { data: renderData, isLoad, fetch } = PostFetch();
    const [rolAddData, setRolAdd] = useState<any[]>([]);
    const { fetch: deleteFetch } = DeleteFetch();
    const { register, handleSubmit, control } = useForm();
    const onSubmit = (data: any) => { fetch("modulos/roles/hash", data) };
    const rows: any = renderData ? renderData[0].modulos_has_role : []

    useEffect(() => {
        fetch("modulos/roles/hash", { "rolName": viewData[0], inModule: true })
    }, []);

    const AddRolHandler = async (e: any) => {
        //await deleteFetch("modulos/delete/", { ...e, modulos: rolAddData });
        toast("sss")
        onSubmit(e)
        setRolAdd([]);
    }

    const VISIBLE_FIELDS = visible_fields;

    const columnsData: any[] = VISIBLE_FIELDS!.map((e: string) => {
        let ExtrasActions = {} as a;
        if (e === 'ver') {
            ExtrasActions = {
                renderCell: (params: GridRenderCellParams) => {
                    return <Controller control={control} name="switch" defaultValue={false} render={({ field }) => <Switch {...field} defaultChecked value={true} />} />
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
        <>
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
                        console.log(e)
                        if (e.field === "ver") {
                            if (e.row.id in rolAddData) {
                                const newArrray = rolAddData.filter((c) => c !== e.row.id);
                                setRolAdd(newArrray);
                            } else {
                                setRolAdd([...rolAddData, e.row.id])
                            }
                        }
                    }}
                />
                <Button type="submit" onClick={handleSubmit(AddRolHandler)} disabled={rolAddData.length < 1} > Save </Button>
            </Box>
        </>
    );
}