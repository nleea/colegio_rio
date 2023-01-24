import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Box, MenuItem, Button } from "@mui/material";
import { Media } from "../../../utils/media/media";

type FormValues = {
    name: string,
    lastname: string,
    dni: string,
    phone: string,
    address: string,
    postal_code: string,
    username: string,
    email: string,
    sex: string,
    country: string
}


const PersonalInfo = () => {
    const [media, setMedia] = useState(window.innerWidth > 990);


    useEffect(() => {
        window.addEventListener("resize", ChangeResize);
    }, []);


    const ChangeResize = () => {
        if (window.innerWidth > 1200) {
            setMedia(true);
        } else {
            setMedia(false);
        }
    }

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

    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

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
            >

                <TextField
                    required
                    multiline
                    rows={1.5}
                    label="Name"
                    sx={{ margin: 2, width: !media ? "100%" : "45%" }}
                    {...register("name")}
                />

                <TextField
                    required
                    multiline
                    rows={1.5}
                    label="Last Name"
                    sx={{ margin: 2, width: !media ? "100%" : "45%" }}
                    {...register("lastname")}
                />

                <TextField
                    required
                    multiline
                    rows={1.5}
                    label="Email"
                    sx={{ margin: 2, width: !media ? "100%" : "45%" }}
                    {...register("email")}
                />

                <TextField
                    required
                    multiline
                    rows={1.5}
                    label="Address"
                    sx={{ margin: 2, width: !media ? "100%" : "45%" }}
                    {...register("address")}
                />

                <TextField
                    required
                    multiline
                    rows={1.5}
                    type="number"
                    label="Postal Code"
                    sx={{ margin: 2, width: !media ? "100%" : "45%" }}
                    {...register("postal_code")}
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                />

                <TextField select fullWidth defaultValue="" rows={1.5} label="Sex" inputProps={register('sex')} sx={{ margin: 2, width: !media ? "100%" : "45%" }} multiline >
                    {sexType.map((e) => (
                        <MenuItem key={e.value} value={e.value} >
                            {e.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField select fullWidth defaultValue="" rows={1.5} label="City" inputProps={register('sex')} sx={{ margin: 2, width: !media ? "100%" : "45%" }} multiline >
                    {sexType.map((e) => (
                        <MenuItem key={e.value} value={e.value} >
                            {e.label}
                        </MenuItem>
                    ))}
                </TextField>

                <TextField select fullWidth defaultValue="" rows={1.5} label="Country" inputProps={register('sex')} sx={{ margin: 2, width: !media ? "100%" : "45%" }} multiline >
                    {sexType.map((e) => (
                        <MenuItem key={e.value} value={e.value} >
                            {e.label}
                        </MenuItem>
                    ))}
                </TextField>
            </Box>

            <Button variant="contained" color="success" sx={{ margin: 1, padding: 1 }} >
                Save Change
            </Button>
        </>

    )
}

export default PersonalInfo;