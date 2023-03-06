import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Switch from '@mui/material/Switch';
import { useForm } from "react-hook-form";
import { PostFetch } from "@/service/hooks/modules/PostData";
import { DeleteFetch } from "@/service/hooks/deleteData";

const label = { inputProps: { 'aria-label': 'Switch demo' } };


export function ModulesEdit({ viewData }: { viewData: any }) {
    const { data: renderData, isLoad, fetch } = PostFetch();
    const [rolDeleteData, setRolDelete] = useState<any[]>([]);
    const { fetch: deleteFetch } = DeleteFetch();
    const { register, handleSubmit } = useForm();
    const onSubmit = (data: any) => { fetch("modulos/roles/hash", data) };
    const rows: any = renderData ? renderData[0].modulos_has_role : []

    useEffect(() => {
        fetch("modulos/roles/hash", { "rolName": viewData[0] })
    }, [])

    const deleteRolHandler = async (e: any) => {
        await deleteFetch("modulos/delete/", { ...e, modulos: rolDeleteData });
        onSubmit(e)
        setRolDelete([]);
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'name',
            headerName: 'Name',
            width: 250,
            editable: false,
            sortable: false,
        },
        {
            field: 'Ver',
            headerName: 'Ver',
            width: 250,
            editable: true,
            sortable: false,
            renderCell: (params: any) => (
                <Switch {...label} defaultChecked value={true} />
            ),
        }
    ];

    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("rolName")} onChange={handleSubmit(onSubmit)} >
                    {
                        viewData.map((c: string) => (
                            <option value={c} key={c} >{c}</option>
                        ))
                    }
                </select>
            </form>
            <DataGrid
                rows={renderData === undefined ? [] : rows}
                columns={columns}
                loading={isLoad}
                onCellClick={(e) => {
                    if (e.field === "Ver") {
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