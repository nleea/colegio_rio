import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FormInputStyled, FormStyled, FormSelect } from "@/components/UI/form";
import { GetFetch } from "@/service/hooks/modules/getData";
import { PostFetch } from "@/service/hooks/modules/PostData";
import { Paper } from "@mui/material";
import { Button } from "@/components/UI/button";

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
    cofuncionarios: Ifields[];
    administrador: Ifields[]
}

export const RegisterUsers = () => {
    const { data, fetch } = GetFetch();
    const { fetch: postData } = PostFetch();
    const { register, handleSubmit } = useForm();
    const [select, setSelect] = useState<Partial<keyof IstaticData>>();

    useEffect(() => {
        const test = async () => {
            await fetch("roles/")
        }
        test();
    }, [])

    const onSubmit = (data: any) => {
        postData("user/register/", data);
    };

    const StaticData: IstaticData = {
        usuario: [
            { field: "email", label: "Email", type: "text" },
            { field: "identificacion", label: "Identificacion", type: "text" },
            { field: "lugarexpedicion", label: "Lugar Expedicion", type: "text" },
            { field: "fechaexpedicion", label: "Fecha Expedicion", type: "date" },
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
                field: "fechaingreso", label: "Fecha Ingreso", type: "date"
            },
            {
                field: "fechasalida", label: "Fecha Salida", type: "date"
            }
        ] as Ifields[],
        cofuncionarios: [
            {
                field: "fechaingreso", label: "Fecha Ingreso", type: "date"
            },
            {
                field: "tarjetaprofesional", label: "Tarjeta Profesional"
            }
        ] as Ifields[],
        administrador: [
            {
                field: "fechaingreso", label: "Fecha Ingreso", type: "date"
            },
            {
                field: "fechasalida", label: "Fecha Salida", type: "date"
            }
        ] as Ifields[]
    }

    return (

        <Paper style={{ margin: "auto", width: "60%", borderRadius: "0" }} >
            <FormStyled onSubmit={handleSubmit(onSubmit)} style={{ padding: "15px" }}  >
                {
                    StaticData.usuario.map((data) => {
                        if (data.type === "select") {
                            return (
                                <FormSelect key={data.field}  {...register(data.field)} onChange={(e) => setSelect(e.target.value.toLowerCase() as keyof IstaticData)}  >
                                    <option>Select a option</option>
                                    {
                                        data.options?.map((opt) => <option key={opt.name} value={opt.value} >{` ${(opt.name as string).charAt(0).toUpperCase().concat((opt.name as string).substring(1, opt.name.lenght))} `}</option>)
                                    }
                                </FormSelect>
                            )
                        }
                        return <FormInputStyled {...register(data.field)} key={data.field} placeholder={data.label} type={data.type} />
                    })
                }
                {
                    select ? select in StaticData ? StaticData[select].map((data) => <FormInputStyled {...register(data.field)} key={data.field} placeholder={data.label} type={data.type} />) : null : null
                }
                <Button type="submit">Save</Button>
            </FormStyled>
        </Paper>

    )
}