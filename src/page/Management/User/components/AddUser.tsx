import { Paper } from "@mui/material";
import { CustomForm } from "@/components/UI/form";
import type { Ifields } from "@/components/UI/form";
import { GetAll } from "@/service/hooks/GetAll";
import { AdminPanel } from "@/components/sidebar/icons/Icons";


export const RegisterUsers = () => {

    const { state } = GetAll<any>("roles/");

    const StaticData: Ifields<any>[] = [
        { field: "email", label: "Email", type: "text" },
        { field: "identificacion", label: "Identificacion", type: "text" },
        { field: "lugarexpedicion", label: "Lugar Expedicion", type: "text"},
        { field: "fechaexpedicion", label: "Fecha Expedicion", type: "date"},
        { field: "direccion", label: "Direccion", type: "text" },
        { field: "telefono", label: "Telefono", type: "text" },
        { field: "telefonomovil", label: "Telefono Movil", type: "text"},
        { field: "fechanacimiento", label: "Fecha Nacimiento", type: "date"},
        { field: "name", label: "Nombre", type: "text" },
        { field: "segundonombre", label: "Segundo Nombre", type: "text" },
        { field: "apellido", label: "Apellido", type: "text" },
        { field: "segundoapellido", label: "Segundo Apellido", type: "text" },
        { field: "observaciones", label: "Observaciones", type: "text" },
        { field: "avatar", label: "Avatar", type: "file" },
        { field: "roles", label: "Rol", type: "select", options: state ?? [] },
        { field: "fechaingreso", label: "Fecha Ingreso", type: "date", dependence: "roles", dependence_value: ["Estudiante", "Cofuncionarios"] },
        { field: "fechasalida", label: "Fecha Salida", type: "date", dependence: "roles", dependence_value: "Estudiante" },
        { field: "tarjetaprofesional", label: "Tarjeta Profesional", type: "text", dependence: "roles", dependence_value: "Cofuncionarios" }
    ]

    return (

        <Paper style={{ margin: "auto", width: "60%", borderRadius: "0" }} >
            <CustomForm fields={StaticData} url="user/register/" formType={{ type: "Save", icon: AdminPanel }} />
        </Paper >

    )
}