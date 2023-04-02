import { Paper } from "@mui/material";
import { CustomForm } from "@/components/UI/form";
import type { Ifields } from "@/components/UI/form";
import { GetAll } from "@/service/hooks/GetAll";

export const RegisterUsers = () => {

    const { state } = GetAll<any>("roles/");




    const StaticData: Ifields<any>[] = [
        { field: "email", label: "Email", type: "text", defaultValue: "" },
        { field: "identificacion", label: "Identificacion", type: "text", defaultValue: "" },
        { field: "lugarexpedicion", label: "Lugar Expedicion", type: "text", defaultValue: "" },
        { field: "fechaexpedicion", label: "Fecha Expedicion", type: "date", defaultValue: "" },
        { field: "direccion", label: "Direccion", type: "text", defaultValue: "" },
        { field: "telefono", label: "Telefono", type: "text", defaultValue: "" },
        { field: "telefonomovil", label: "Telefono Movil", type: "text", defaultValue: "" },
        { field: "fechanacimiento", label: "Fecha Nacimiento", type: "date", defaultValue: "" },
        { field: "name", label: "Nombre", type: "text" },
        { field: "segundonombre", label: "Segundo Nombre", type: "text" },
        { field: "apellido", label: "Apellido", type: "text" },
        { field: "segundoapellido", label: "Segundo Apellido", type: "text" },
        { field: "observaciones", label: "Observaciones", type: "text" },
        { field: "avatar", label: "Avatar", type: "file" },
        { field: "roles", label: "Rol", type: "select", options: state ?? [] },
        { field: "fechaingreso", label: "Fecha Ingreso", type: "date", dependence: "roles", dependence_value: "Estudiante" },
        { field: "fechasalida", label: "Fecha Salida", type: "date", dependence: "roles", dependence_value: "Estudiante" },
        { field: "fechaingreso", label: "Fecha Ingreso", type: "date", dependence: "roles", dependence_value: "Cofuncionarios" },
        { field: "tarjetaprofesional", label: "Tarjeta Profesional", type: "text", dependence: "roles", dependence_value: "Cofuncionarios" },
        {
            field: "test", label: "Rol", type: "select", options: [{ name: "test1", value: "test1" }, { name: "test2", value: "test2" }]
        },
        { field: "fechaingreso", label: "Fecha Ingreso", type: "date", dependence: "test", dependence_value: "test1" },
        { field: "tarjetaprofesional", label: "Tarjeta Profesional", type: "text", dependence: "test", dependence_value: "test2" },
    ]

    return (

        <Paper style={{ margin: "auto", width: "60%", borderRadius: "0" }} >
            <CustomForm fields={StaticData} url="user/register/" />
        </Paper >

    )
}