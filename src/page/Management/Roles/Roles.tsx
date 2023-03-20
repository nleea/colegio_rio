import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Table } from "@/components/UI/table/table2";
import { PostFetch } from "@/service/hooks/modules/PostData";
import { Person } from "@/page/Management/User/components/data";
import { useSelector } from "react-redux";
import type { RootState } from "@/service/context/app/store"
import { Dashboard } from "@/components/UI/Roles/Dashboard";
import { resize } from "@/service/hooks/size/resize";
import { ViewModal } from "@/components/UI/modal/Modal";


export const Roles = () => {
    const [open, setOpen] = useState(false);
    const [openModalAdd, setOpenAddmodal] = useState(false);
    const [viewData, setViewData] = useState([]);
    const { data, fetch } = PostFetch<Person[]>();

    useEffect(() => {
        fetch("user", { type: "Estudiante", is: false })
    }, [])

    const { media } = resize();

    const BreakPoint: any = {
        "MOBILE": {
            "min": 12,
            "max": 12
        },
        "TABLET": {
            "min": 12,
            "max": 12
        },
        "TABLET_LANDSCAPE": {
            "min": 12,
            "max": 12
        },
        "DESKTOP": {
            "min": 12,
            "max": 12
        },
    }

    const closeHandler = () => {
        setOpen(false);
        setOpenAddmodal(false);
    }

    return (
        <>
            <Grid container height="100%" wrap="wrap">
                <Grid item xs={BreakPoint[media].min} height="auto" maxWidth={"100%"} margin="auto" >
                    <Dashboard />
                </Grid>

                <Grid item xs={BreakPoint[media].max} height="500px" maxWidth={"100%"}>
                    <Table data={data ? data : []} visible_fields={[{ header: "id", access: "id" }, { header: "username", access: "username" }, { header: "roles", access: "roles" }, { header: "email", access: "email" }]}  />
                </Grid>
            </Grid>
        </>
    )
}