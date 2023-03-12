import { useState, useEffect } from "react";
import { GetAll } from "@/service/hooks/GetAll";
import { Person } from "@/page/Management/User/components/data";
import { useSelector } from "react-redux";
import type { RootState } from "@/service/context/app/store"
import { resize } from "@/service/hooks/size/resize";
import { Table } from "@/components/UI/table/table2";
import { GetFetch } from "@/service/hooks/modules/getData";

export const TablaFuncionarios = () => {
    const [open, setOpen] = useState(false);
    const [openModalAdd, setOpenAddmodal] = useState(false);
    const [viewData, setViewData] = useState([])
    const { fetch, data } = GetFetch();

    useEffect(() => {
        fetch("user")
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


    const flatData: any[] = [];

    // data?.map((user) => {
    //     flatData.push({ ...user, roles: user.roles.name })
    // })


    return (
        <>
            {/* <Table data={flatData} visible_fields={["id", "username", "roles", "email"]} load={isLoad} modalOpen={() => setOpen(true)} setViewData={(e) => setViewData(e)} /> */}
            <Table visible_fields={[{ header: "id", access: "id" }, { header: "username", access: "username" }, { header: "email", access: "email" }, { header: "roles", access: "roles" }]} data={data} />
        </>
    )
}