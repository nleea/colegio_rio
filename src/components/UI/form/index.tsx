import styled from "styled-components";
import { useForm } from "react-hook-form";
import { PostFetch } from "@/service/hooks/modules/PostData";
import { Paper, Box } from "@mui/material";
import { Button } from "@/components/UI/button";
import { Ipoint } from "@/service/hooks/size/resize";
import { isArray } from "lodash";

export const FormInputStyled = styled.input`
background: white;
border-bottom: 1px solid black;
width: 100%;
color: black;
height: 30px;
margin: 10px;
display: ${({ visible }: { visible: boolean }) => visible ? 'block' : 'none'};
&:active, &:hover, &:focus {
    border-bottom: 1px solid blue;
    transition border-bottom 1s linear;
}
`;


export const FormStyled = styled.form`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
`;

export const FormSelect = styled.select`
background: white;
border-bottom: 1px solid black;
width: 100%;
color: black;
height: 30px;
margin: 10px;
`;

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


export const CustomForm = ({ fields, media, box = true, url, customPost }: { fields: Ifields[], media?: Ipoint, box?: boolean, url: string, customPost?: () => void }) => {

    const { fetch: postData } = PostFetch();
    const { register, handleSubmit, reset, watch } = useForm();
    const fieldWatch = watch()

    const onSubmit = async (data: any) => {
        let file = false;
        if (customPost) {
            customPost()
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

            await postData(url, file ? values : data);
        }
        reset()
    };

    const StaticData: IstaticData = {
        inputs: fields as Ifields[]
    }


    const formFactory = () => {

        return StaticData.inputs.map((data, index) => {
            if (data.type === "select") {
                return <FormSelect key={data.field}  {...register(data.field)} >
                    <option>Select a option</option>
                    {
                        data.options?.map((opt) => <option key={(opt.name as string).concat(`${index}`)} value={opt.value} >{` ${(opt.name as string).charAt(0).toUpperCase().concat((opt.name as string).substring(1, opt.name.lenght))} `}</option>)
                    }
                </FormSelect>
            }

            const resulst = (data.dependence_value !== undefined && data.dependence !== null) ?
                isArray(data.dependence_value) && !isArray(data.dependence) ? data.dependence_value.some((value) => value === fieldWatch[data.dependence! as string]) :
                    isArray(data.dependence) && !isArray(data.dependence_value) ? fieldWatch[data.dependence.find((c) => c in Object.keys(fieldWatch))!] === data.dependence_value :
                        data.dependence_value === fieldWatch[data.dependence! as string] : true;

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
                    <Button type="submit">Save</Button>
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
                <Button type="submit">Save</Button>
            </FormStyled>
        </>
}