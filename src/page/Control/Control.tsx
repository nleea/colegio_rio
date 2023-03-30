import { useEffect, useRef } from "react";
import { resize } from "@/service/hooks/size/resize";
import { CustomForm, Ifields } from "@/components/UI/form/index";
import { PostFetch } from "@/service/hooks/modules/PostData";
import { GetFetchFiles } from "@/service/hooks/modules/getFiles";
import { instance } from "@/instance/axiosInstance";
import axios from "axios";

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

    const { fetch, data } = PostFetch();
    const { data: getData, fetch: getFetch } = GetFetchFiles<any>();

    useEffect(() => {
        //fetch("control/user/asistencia/", { id: 4 })
        getFetch("control/user/asistencia/", { responseType: 'blob' });
    }, [])

    const { media } = resize({ MOBILE: { width: { max: "95%", min: "80%" } }, DESKTOP: { width: { min: "10%", max: "40%" } }, TABLET: { width: { min: "10%", max: "80%" } }, TABLET_LANDSCAPE: { width: { min: "10%", max: "40%" } } });

    const ControlFields: Ifields<AllowAsistencias>[] = [
        { field: "identificacion", label: "Identificacion", type: "number" },
        { field: "diagnostico", label: "Diagnostico", type: "text" },
        { field: "incapacidad", label: "Incapacidad", type: "text" },
        { field: "jornada", label: "Jornada", type: "text" },
        { field: "motivo", label: "Motivo", type: "text" },
        { field: "observacion", label: "Observacion", type: "text" },
        { field: "respuesta_llamada", label: "Respuesta llamada", type: "text" },
        { field: "retardo", label: "Retardo", type: "text" }
    ]

    const savePDF = async () => {
        const { data } = await axios.get("http://localhost:4000/api/control/user/asistencia/", { responseType: "blob" });
        console.log(data)
        const blob = new Blob([data])
        const link = document.createElement('a')
        link.href = window.URL.createObjectURL(blob)
        link.setAttribute('download', 'file.pdf');
        link.click()
    }

    return (
        //<CustomForm fields={ControlFields} media={media} box={true} url="control/asistencia/" />
        //<img src={data as any} alt="" />
        <button onClick={savePDF}>Save as PDF</button>
    )
}