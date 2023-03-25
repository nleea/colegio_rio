import { useState, useEffect } from "react";
import { GetAll } from "@/service/hooks/GetAll";
import { Person } from "@/page/Management/User/components/data";
import { useSelector } from "react-redux";
import type { RootState } from "@/service/context/app/store"
import { resize } from "@/service/hooks/size/resize";
import { Table } from "@/components/UI/table/table2";
import { PostFetch } from "@/service/hooks/modules/PostData";
import { ViewModal } from "@/components/UI/modal/Modal";

export const TablaFuncionarios = () => {
    const [open, setOpen] = useState(false);
    const [openModalAdd, setOpenAddmodal] = useState(false);
    const { fetch, data } = PostFetch();

    useEffect(() => {
        fetch("user", { type: "Estudiante", is: false })
    }, [])

    

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
            <Table visible_fields={[{ header: "id", access: "id" }, { header: "username", access: "username" }, { header: "email", access: "email" }, { header: "roles", access: "roles" }]}
                data={data} />

            <ViewModal closeHandler={closeHandler} open={open}   >

            </ViewModal>
        </>
    )
}