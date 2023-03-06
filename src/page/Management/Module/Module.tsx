import { useState, useEffect } from "react";
import { Table } from "@/components/UI/table/Table";
import { GetFetch } from "@/service/hooks/modules/getData";
import { useSelector } from "react-redux";
import type { RootState } from "@/service/context/app/store";
import { ViewModal } from "@/components/UI/modal/Modal";
import { ModulesEdit } from "@/components/modules-edit/ModulesEdit";

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
    const [viewData, setViewData] = useState([])
    type response = Iresponse & Irol;
    let flatData: response[] = [];
    const load = useSelector((s: RootState) => s.store.isLoad);


    useEffect(() => {
        fetch("/modulos");
    }, []);

    const fetchFlatdata = async (data: Array<any>) => {
        await fetch("/modulos");
        flatData = [];
    };

    const closeHandler = () => {
        fetchFlatdata(data!);
        setOpen(false);
    }

    data?.forEach((e) => {
        e.modulos_has_role.forEach((c) => {
            if (flatData.some((s) => s.name === c.name)) {
                let index = flatData.findIndex((s) => s.name === c.name);
                flatData[index].rol.push(e.name)
            } else {
                flatData.push({ ...c, rol: [e.name] })
            }
        })
    });

    return (
        <>
            <Table data={flatData} visible_fields={["id", "name", "rol", "path", "dependencia"]}
                load={load} modalOpen={() => setOpen(true)} setViewData={(e) => setViewData(e)} />

            <ViewModal open={open} closeHandler={closeHandler} >
                <ModulesEdit viewData={viewData} visible_fields={["id", "name", "ver"]} />
            </ViewModal>
        </>
    )
}