import { useState, useMemo } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridRenderCellParams, GridColDef, GridColTypeDef } from '@mui/x-data-grid';
import { Switch } from '@mui/material';
import { useForm, Controller } from "react-hook-form";
import { PostFetch } from "@/service/hooks/modules/PostData";
import { GetAll } from "@/service/hooks/GetAll";
import toast from "react-hot-toast";
import { Button } from "@/components/UI/button/index";

interface ColumnType {
    field: string;
    headerName: string;
    width: number;
}

interface IrolResponse {
    name: string;
    users: Array<any>;
    _count: any;
    id: number
}

type a = ColumnType & GridColDef & GridColTypeDef;

export const ModulesAdd = ({ visible_fields }: { visible_fields: any }) => {
    const { state } = GetAll<IrolResponse>("/roles")
    const { data: renderData, isLoad, fetch } = PostFetch();
    const { fetch: AddModulos, error } = PostFetch();
    const [rolAddData, setRolAdd] = useState<any[]>([]);
    const { register, handleSubmit, control } = useForm();
    const onSubmit = (data: any) => fetch("modulos/without/roles/", data);
    const rows: any = renderData ? renderData : []

    const AddRolHandler = async (e: any) => {

        console.log( )
        await AddModulos("modulos/roles/", { rolId: e.rolId, modulos: rolAddData });
        setRolAdd([]);
        onSubmit(e)
        if (!error) {
            toast.success("Sucess")
        } else {
            toast.error(`${error}`)
        }
    }

    const VISIBLE_FIELDS = visible_fields;

    const columnsData: any[] = VISIBLE_FIELDS!.map((e: string) => {
        let ExtrasActions = {} as a;
        if (e === 'ver') {
            ExtrasActions = {
                renderCell: (params: GridRenderCellParams) => {
                    return <Controller control={control} name="switch" defaultValue={false} render={({ field }) => <Switch {...field} defaultChecked={false} value={false} />} />
                },
            } as a
        }
        return { ...ExtrasActions, field: e!, headerName: e?.charAt(0).toUpperCase() + e?.slice(1)!, width: 300 } as any
    });

    const columns: a[] = useMemo(
        () => columnsData.filter((column) => VISIBLE_FIELDS!.includes(column!.field as any)),
        [columnsData],
    );

    return (
        <>
            <Box sx={{ height: 400, width: '100%' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <select {...register("rolId")} >
                        <option>Select</option>
                        {
                            state?.map((c) => {
                                return <option value={c.id} key={c.id} >{c.name}</option>
                            })
                        }
                    </select>

                    <input type="submit" />
                </form>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    loading={isLoad}
                    onCellClick={(e) => {
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