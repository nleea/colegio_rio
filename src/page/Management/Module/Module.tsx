import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { Table } from "@/components/UI/table/table2";
import { GetFetch } from "@/service/hooks/modules/getData";
import { useSelector } from "react-redux";
import type { RootState } from "@/service/context/app/store";
import { ViewModal } from "@/components/UI/modal/Modal";
import { ModulesEdit } from "@/page/Management/Module/components/modules/ModulesEdit";
import { ModulesAdd } from "@/page/Management/Module/components/modules/ModulesAdd";
import { Button } from "@/components/UI/button/index";

interface Iresponse {
    name: string;
    categoria: string;
    modulos_has_role: Array<any>;
}

interface Irol {
    rol: Array<any>
}

export const Module = () => {
    const { fetch, data } = GetFetch<Iresponse[]>();
    const [open, setOpen] = useState(false);
    const [openModalAdd, setOpenAddmodal] = useState(false);
    const [viewData, setViewData] = useState([])
    type response = Omit<Iresponse, "modulos_has_role"> & Irol;
    let flatData: response[] = [];
    const load = useSelector((s: RootState) => (s.store as any).isLoad);

    useEffect(() => {
        fetch("/modulos");
    }, []);

    const fetchFlatdata = async () => {
        fetch("/modulos");
        flatData = [];
    };

    const closeHandler = () => {
        fetchFlatdata();
        setOpen(false);
        setOpenAddmodal(false);
    }

    data?.forEach((e) => {
        e.modulos_has_role.forEach((c) => {
            if (flatData.some((s) => s.name === c.name)) {
                let index = flatData.findIndex((s) => s.name === c.name);
                flatData[index].rol.push(e.name)
            } else {
                flatData.push({
                    ...c, rol: [e.name]
                })
            }
        })
    });


    return (
        <>
            <Box height="auto" sx={{ background: "white", display: "flex", flexDirection: "column", alignItems: "flex-end", alignContent: "flex-end" }}  >
                <Button onClick={() => setOpenAddmodal(true)} >Add</Button>
                <Table data={flatData}
                    visible_fields={[{ header: "id", access: "id" }, { header: "name", access: "name" }, { header: "rol", access: "rol" }, { header: "path", access: "path" }]}
                    modalOpen={() => setOpen(true)}
                    viewData={(data) => setViewData(data)}
                />
            </Box>

            <ViewModal open={open} closeHandler={closeHandler} >
                <ModulesEdit viewData={viewData} visible_fields={["id", "name", "ver"]} />
            </ViewModal>

            <ViewModal open={openModalAdd} closeHandler={closeHandler} >
                <ModulesAdd visible_fields={["id", "name", "ver"]} />
            </ViewModal>

        </>
    )
}