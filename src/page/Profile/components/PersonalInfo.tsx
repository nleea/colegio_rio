import { useLoaderData } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Box, MenuItem, Button } from "@mui/material";
import { resize } from "../../../service/hooks/size/resize";
import moment from "moment";
import { UpdateCustomHooks } from "../../../service/hooks/users/profile";


type FormValues = {
    name: string;
    email: string;
    password?: string;
    password_confirmation?: string;
    identificacion: string;
    fechanacimiento: string;
    nombre: string;
    apellido: string;
    tipoidentificacion_id?: number;
    sexo_id: number;
    roles?: string;
}


const PersonalInfo = () => {
    const user = useLoaderData() as any;
    const { media } = resize(1100);
    const userId = localStorage.getItem("user")
    const { fetch, error } = UpdateCustomHooks();

    const sexType = [
        {
            label: "Men",
            value: "Men"
        },
        {
            label: "Women",
            value: "women"
        }
    ]

    const loaderData: FormValues = {
        email: user.email,
        name: user.personas.nombre,
        apellido: user.personas.apellido,
        identificacion: user.personas.identificacion,
        fechanacimiento: moment(user.personas.fechanacimiento).format("yyyy-MM-DD"),
        sexo_id: 0,
        nombre: user.personas.nombre
    }

    const { register, handleSubmit } = useForm<FormValues>({ defaultValues: loaderData });
    const onSubmit: SubmitHandler<FormValues> = data => {
        console.log(data)
        fetch(`user/edit/${userId}`, data);
    };


    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiFormControlLabel-root': { m: 1, width: '48.26%', fontFamily: "Hanken Grotesk, sans-serif;", '& .MuiFormControl-root': { width: "100%", padding: 0 } },
                    '& .MuiInputBase-root': { padding: "8px 12px" },
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap"
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit(onSubmit)}
            >

                <TextField
                    required
                    multiline
                    rows={1.5}
                    label="Name"
                    sx={{ margin: 2, width: media ? "100%" : "45%" }}
                    {...register("name")}
                />

                <TextField
                    required
                    multiline
                    rows={1.5}
                    label="Last Name"
                    sx={{ margin: 2, width: media ? "100%" : "45%" }}
                    {...register("apellido")}
                />

                <TextField
                    required
                    multiline
                    rows={1.5}
                    label="Email"
                    sx={{ margin: 2, width: media ? "100%" : "45%" }}
                    {...register("email")}
                />

                <TextField
                    required
                    multiline
                    rows={1.5}
                    label="Identificacion"
                    sx={{ margin: 2, width: media ? "100%" : "45%" }}
                    {...register("identificacion")}
                />

                <input type="date" {...register("fechanacimiento")} style={{ margin: 16, padding: 10, width: media ? "100%" : "45%", background: "white", color: "black", border: "1px solid lightgray", borderRadius: "4px" }} />

                <TextField select fullWidth defaultValue="" rows={1.5} label="Sex" inputProps={register('sexo_id')} sx={{ margin: 2, width: media ? "100%" : "45%" }} multiline >
                    {sexType.map((e) => (
                        <MenuItem key={e.value} value={e.value} >
                            {e.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField select fullWidth defaultValue="" rows={1.5} label="City" inputProps={register('sexo_id')} sx={{ margin: 2, width: media ? "100%" : "45%" }} multiline >
                    {sexType.map((e) => (
                        <MenuItem key={e.value} value={e.value} >
                            {e.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField select fullWidth defaultValue="" rows={1.5} label="Country" inputProps={register('sexo_id')} sx={{ margin: 2, width: media ? "100%" : "45%" }} multiline >
                    {sexType.map((e) => (
                        <MenuItem key={e.value} value={e.value} >
                            {e.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>

            <Button variant="contained" color="success" sx={{ margin: 1, padding: 1 }} onClick={handleSubmit(onSubmit)} >
                Save Change
            </Button>
        </>

    )
}

export default PersonalInfo;