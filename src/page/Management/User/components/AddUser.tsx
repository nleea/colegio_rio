import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormInputStyled, FormStyled, FormSelect } from "@/components/UI/form";
import { GetFetch } from "@/service/hooks/modules/getData";
import { Paper } from "@mui/material";

interface Ifields {
    field: string;
    label: string;
    type: string;
    defaultValue?: any;
    options?: any[];
    visible?: boolean;
}

interface IstaticData {
    usuario: Ifields[];
    estudiante: Ifields[];
    funcionario: Ifields[];
    aministrador: Ifields[]
}

export const RegisterUsers = () => {
    const { data, error, fetch } = GetFetch();
    const { register, handleSubmit } = useForm();
    const [select, setSelect] = useState<Partial<keyof IstaticData>>();

    useEffect(() => {
        const test = async () => {
            await fetch("roles/")
        }
        test();
    }, [])

    const onSubmit = (data: any) => console.log(data);

    const StaticData: IstaticData = {
        usuario: [
            { field: "email", label: "Email", type: "text" },
            { field: "identificacion", label: "Identificacion", type: "text" },
            { field: "lugarexpedicion", label: "Lugar Expedicion", type: "text" },
            { field: "fechaexpedicion", label: "Fecha Expedicion", type: "text" },
            { field: "direccion", label: "Direccion", type: "text" },
            { field: "telefono", label: "Telefono", type: "text" },
            { field: "telefonomovil", label: "Telefono Movil", type: "text" },
            { field: "fechanacimiento", label: "Fecha Nacimiento", type: "date" },
            { field: "name", label: "Nombre", type: "text" },
            { field: "segundonombre", label: "Segundo Nombre", type: "text" },
            { field: "apellido", label: "Apellido", type: "text" },
            { field: "segundoapellido", label: "Segundo Apellido", type: "text" },
            { field: "observaciones", label: "Observaciones", type: "text" },
            { field: "roles", label: "Rol", type: "select", options: data ?? [] }
        ] as Ifields[],
        estudiante: [
            {
                field: "fechaingreso", label: "Fecha Ingreso"
            },
            {
                field: "fechasalida", label: "Fecha Salida"
            }
        ] as Ifields[],
        funcionario: [
            {
                field: "fechaingreso", label: "Fecha Ingreso"
            },
            {
                field: "tarjetaprofesional", label: "Tarjeta Profesional"
            }
        ] as Ifields[],
        aministrador: [
            {
                field: "fechaingreso", label: "Fecha Ingreso", type: "text"
            },
            {
                field: "fechasalida", label: "Fecha Salida", type: "text"
            }
        ] as Ifields[]
    }

    return (

        <Paper style={{ margin: "1px auto", width: "60%", borderRadius: "0" }} >
            <FormStyled action="" onSubmit={handleSubmit(onSubmit)} style={{ padding: "15px" }}  >
                {
                    StaticData.usuario.map((data) => {
                        if (data.type === "select") {
                            return <FormSelect name={data.field} key={data.field} onChange={(e) => {
                                console.log(e.target.value)
                                setSelect(e.target.value.toLowerCase() as keyof IstaticData)
                            }}  >
                                {
                                    data.options?.map((opt) => <option key={opt.name} value={opt.value} >{opt.name}</option>)
                                }
                            </FormSelect>
                        }
                        return <FormInputStyled {...register(data.field)} key={data.field} placeholder={data.label} type={data.type} />
                    })
                }
                {
                    select ? StaticData[select].map((data) => <FormInputStyled {...register(data.field)} key={data.field} placeholder={data.label} type={data.type} />) : null
                }

            </FormStyled>
        </Paper>

    )
}