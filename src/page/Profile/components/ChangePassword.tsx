import { useForm, SubmitHandler } from "react-hook-form";
import { TextField, Box, Button } from "@mui/material";


type FormValues = {
    oldPassword: string,
    newPassword: string,
    repeatPassord: string
}

const ChangePassword = () => {

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
                    label="Old Password"
                    sx={{ margin: 2, width: "100%" }}
                    {...register("oldPassword")}
                />

                <TextField
                    required
                    multiline
                    rows={1.5}
                    label="New Passord"
                    sx={{ margin: 2, width: "100%" }}
                    {...register("newPassword")}
                />

                <TextField
                    required
                    multiline
                    rows={1.5}
                    label="Repeat Password"
                    sx={{ margin: 2, width: "100%" }}
                    {...register("repeatPassord")}
                />

            </Box>

            <Button variant="contained" color="success" sx={{ margin: 1, padding: 1 }} >
                Save Change
            </Button>
        </>
    )
}

export default ChangePassword;