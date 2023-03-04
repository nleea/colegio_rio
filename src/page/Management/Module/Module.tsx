import { Table } from "@/components/UI/table/Table";
import { GetAll } from "@/service/hooks/GetAll";
import { useSelector } from "react-redux";
import type { RootState } from "@/service/context/app/store";


interface Iresponse {
    name: string;
    categoria: string;
    modulos_has_role: Array<any>;
}

interface Irol {
    rol: Array<any>
}


export const Module = () => {
    const { state } = GetAll<Iresponse>("/modulos");
    type response = Iresponse & Irol;
    let flatData: response[] = [];
    const load = useSelector((s: RootState) => s.isLoad.isLoad)

    state?.forEach((e) => {
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
        <Table data={flatData} visible_fields={["id", "name", "rol", "path", "dependencia"]} load={load} />
    )
}