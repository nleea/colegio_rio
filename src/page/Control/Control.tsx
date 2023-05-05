import { useEffect } from "react";
import { resize } from "@/service/hooks/size/resize";
import { PostFetch } from "@/service/hooks/modules/PostData";
import { Table } from "@/components/UI/table/table2";
import axios from "axios";
import type { IvisibleFields, IfieldsToolbar } from "@/components/UI/table/table2";
import { useDispatch } from "react-redux";
import { onLoad } from "@/service/context/features/load";

export interface AllowAsistencias {
    identificacion: string;
    respuesta_llamada: string;
    incapacidad: string;
    observacion: string;
    diagnostico: string;
    jornada: string;
    retardo: string;
    motivo: string;
}


export const ControlAsistencia = () => {
    const { data, fetch } = PostFetch<any>();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("user/", { "type": "Estudiante", "is": true });
    }, []);

    const { media } = resize({ MOBILE: { width: { max: "95%", min: "80%" } }, DESKTOP: { width: { min: "10%", max: "40%" } }, TABLET: { width: { min: "10%", max: "80%" } }, TABLET_LANDSCAPE: { width: { min: "10%", max: "40%" } } });

    const savePDF = async (users: Array<any>) => {

        dispatch(onLoad({ isLoad: true }));

        if (users.length) {
            const { data } = await axios.post("http://localhost:4000/api/control/user/asistencia/query/", {
                users: users.map((user: any) => user.id)
            });
            dispatch(onLoad({ isLoad: false }));
        } else {
            const { data } = await axios.get("http://localhost:4000/api/control/user/asistencia/", { responseType: "blob" });
            dispatch(onLoad({ isLoad: false }));
        }

    }

    const visibleFields: IvisibleFields[] = [
        { access: "id", header: "ID" },
        { access: "personas.nombre", header: "Persona" },
        { access: "username", header: "Username" },
        { access: "telefonomovil", header: "Telefono Movil" }
    ]

    const componentTopBar: IfieldsToolbar[] = [
        { onClick: savePDF, title: "Generar QR", styles: { "width": "auto" } },
        { onClick: () => { }, title: "Generar Graficas", styles: { "width": "auto", "textAling": "left" } }
    ]

    return (

        <>
            <Table visible_fields={visibleFields}
                data={data} componentstoolBar={componentTopBar} ></Table>
        </>

    )
}