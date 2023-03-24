import { resize } from "@/service/hooks/size/resize";
import { CustomForm, Ifields } from "@/components/UI/form/index";

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

    return (
        <CustomForm fields={ControlFields} media={media} box={true} url="control/asistencia/" />
    )
}