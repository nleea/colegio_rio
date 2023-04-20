import { useForm } from "react-hook-form";
import { MultipleFetch, Methods } from "@/service/hooks/modules/optionsFetch";
import { Paper, Box } from "@mui/material";
import { Button } from "@/components/UI/button";
import { Ipoint } from "@/service/hooks/size/resize";
import { isArray } from "lodash";
import { FormInputStyled, FormSelect, FormStyled, FormDate } from "./styles";

interface Itypes {
    text: string;
    date: string;
    select: string;
    number: string;
    file: string;
}

export type Ifields<C = {}> = {
    field: keyof C;
    label: string;
    type: keyof Itypes;
    defaultValue?: any;
    options?: any[];
    dependence?: string | string[];
    dependence_value?: string | string[];
}

type IstaticData = {
    [x: string]: Ifields[];
}

type FormType = "Save" | "Edit";


interface Form {
    type: FormType;
    icon?: any;
}

export const CustomForm = ({ fields, media, box = true, url, action, method, formType }: { fields: Ifields[], formType?: Form, media?: Ipoint, box?: boolean, url: string, method?: Methods, action?: () => void }) => {

    const { fetch } = MultipleFetch();
    const { register, handleSubmit, reset, watch } = useForm();
    const fieldWatch = watch()

    const onSubmit = async (data: any) => {
        let file = false;
        if (action) {
            action()
        } else {
            const values = new FormData()
            for (const key in data) {
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    const value = data[key];
                    values.append(key, value instanceof FileList ? value[0] : value);
                    if (value instanceof FileList) {
                        file = true
                    }
                }
            }

            await fetch(url, file ? values : data, method ?? "post");
        }
        reset()
    };

    const StaticData: IstaticData = {
        inputs: fields as Ifields[]
    }


    const formFactory = () => {

        return StaticData.inputs.map((data, index) => {

            const resulst = (data.dependence_value !== undefined && data.dependence !== undefined) ?
                isArray(data.dependence_value) ?
                    data.dependence_value.some((value) => value === fieldWatch[data.dependence! as string]) :
                    data.dependence_value === fieldWatch[data.dependence as string] : true;

            if (data.type === "select") {
                return <FormSelect key={data.field}  {...register(data.field)} >
                    <option>Select a option</option>
                    {
                        data.options?.map((opt) => <option key={(opt.name as string).concat(`${index}`)} value={opt.value} >{` ${(opt.name as string).charAt(0).toUpperCase().concat((opt.name as string).substring(1, opt.name.lenght))} `}</option>)
                    }
                </FormSelect>
            } else if (data.type === "date") {
                return <FormDate visible={resulst}>
                    <label htmlFor={(data.field as string).concat(`${index}`)} className="form-date__label" >{data.label}</label>
                    <input className="form-date__input"  {...register(data.field)} key={(data.field as string).concat(`${index}`)} placeholder={data.label} type="date" id={(data.field as string).concat(`${index}`)} />
                </FormDate>
            }

            return <FormInputStyled {...register(data.field as string)} key={(data.field as string).concat(`${index}`)} placeholder={data.label} type={data.type} visible={resulst} />
        })
    };

    return box ? <>
        <Box sx={{ maxWidth: media?.width?.max, minWidth: media?.width?.min, margin: "auto", marginTop: "11%" }} >
            <Paper style={{ margin: "auto", width: "inherit", borderRadius: "0" }} >
                <FormStyled onSubmit={handleSubmit(onSubmit)} style={{ padding: "15px" }}  >
                    {
                        ...formFactory()
                    }
                    <Button type="submit">{formType?.type} </Button>
                </FormStyled>
            </Paper>
        </Box>
    </>
        :
        <>
            <FormStyled onSubmit={handleSubmit(onSubmit)} style={{ padding: "15px" }}  >
                {
                    ...formFactory()
                }
                <Button type="submit">{formType?.type}</Button>
            </FormStyled>
        </>
}