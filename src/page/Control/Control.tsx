import { useEffect } from "react";
import { resize } from "@/service/hooks/size/resize";
import { PostFetch } from "@/service/hooks/modules/PostData";
import { Table } from "@/components/UI/table/table2";
import axios from "axios";
import type { IvisibleFields } from "@/components/UI/table/table2";

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

    useEffect(() => {
        fetch("user/", { "type": "Estudiante", "is": true });
    }, []);

    const { media } = resize({ MOBILE: { width: { max: "95%", min: "80%" } }, DESKTOP: { width: { min: "10%", max: "40%" } }, TABLET: { width: { min: "10%", max: "80%" } }, TABLET_LANDSCAPE: { width: { min: "10%", max: "40%" } } });

    const savePDF = async () => {
        const { data } = await axios.get("http://localhost:4000/api/control/user/asistencia/", { responseType: "blob" });
        const blob = new Blob([data])
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.setAttribute('download', 'file.zip');
        link.click()
    }

    const visibleFields: IvisibleFields[] = [
        { access: "id", header: "ID" },
        { access: "personas.nombre", header: "Persona" },
        { access: "username", header: "Username" },
        { access: "telefonomovil", header: "Telefono Movil" }
    ]

    return (

        <>

            <Table visible_fields={visibleFields}
                data={data} ></Table>

            <button onClick={savePDF}>Save as PDF</button>
        </>

    )
}