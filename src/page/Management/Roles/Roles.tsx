import { useState } from "react";
import { Grid } from "@mui/material";
import { Table } from "@/components/UI/table/Table";
import { GetAll } from "@/service/hooks/GetAll";
import { Person } from "@/page/Management/User/components/data";
import { useSelector } from "react-redux";
import type { RootState } from "@/service/context/app/store"
import { Dashboard } from "@/components/UI/Roles/Dashboard";
import { resize } from "@/service/hooks/size/resize";
import { ViewModal } from "@/components/UI/modal/Modal";

export const Roles = () => {
    const [open, setOpen] = useState(false);
    const [openModalAdd, setOpenAddmodal] = useState(false);
    const [viewData, setViewData] = useState([])

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


    const flatData: any[] = [];

    const { state } = GetAll<Person>("user/");
    const isLoad = useSelector((state: RootState) => state.store.isLoad)

    state?.map((user) => {
        flatData.push({ ...user, roles: user.roles.name })
    })


    return (
        <>
            <Grid container height="100%" wrap="wrap">
                <Grid item xs={BreakPoint[media].min} height="auto" maxWidth={"100%"} margin="auto" >
                    <Dashboard />
                </Grid>

                <Grid item xs={BreakPoint[media].max} height="500px" maxWidth={"100%"}>
                    <Table data={flatData} visible_fields={["id", "username", "roles", "email"]} load={isLoad} modalOpen={() => setOpen(true)} setViewData={(e) => setViewData(e)} />
                </Grid>
            </Grid>

            <ViewModal open={open} closeHandler={closeHandler} >

            </ViewModal>
        </>
    )
}