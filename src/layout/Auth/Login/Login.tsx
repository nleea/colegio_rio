import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Container, Grid, Paper, Typography, TextField, InputAdornment, IconButton, Button } from "@mui/material";
import { AccountCircle, VisibilityOff, Visibility, Password } from "@mui/icons-material";
import { useForm, SubmitHandler } from "react-hook-form";
import { AuthCustomHooks } from "../../../service/hooks/loginAuth";
import { Inputs } from "./interfaces/Inputs";
import "./style/login.scss";

export const Login = () => {

    const { isLoad, fetch, error } = AuthCustomHooks();
    const navigate = useNavigate();

    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
        await fetch('auth/login', { username: data.username, password: data.password });

        if (!error) {
            reset();
            navigate("/")
        }
    };

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Box sx={{ display: "flex", flexFlow: "wrap", justifyContent: "center", width: "50%", marginTop: "11%" }} >
            <Container maxWidth="xl"   >
                <Paper elevation={1} >
                    <Grid container sx={{ padding: "15px" }}>
                        <Grid item xs={12} >
                            <Typography variant="h2" className="login-typographic">
                                Hi, Welcome Back
                            </Typography>
                            <Typography sx={{ textAlign: "center", marginTop: "15px" }} >
                                Enter your credentials to continue
                            </Typography>
                        </Grid>
                        <Grid item xs={12} >
                            <form onSubmit={handleSubmit(onSubmit)} style={{ marginTop: "40px" }}>
                                <TextField
                                    id="standard-required"
                                    label="Username"
                                    defaultValue=""
                                    variant="outlined"
                                    type="text"
                                    fullWidth={true}
                                    {...register("username")}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <AccountCircle />
                                            </InputAdornment>
                                        )
                                    }}
                                />

                                <TextField
                                    id="standard-password-input"
                                    type={showPassword ? "text" : "password"}
                                    label="Password"
                                    defaultValue=""
                                    {...register("password")}
                                    variant="outlined"
                                    fullWidth={true}
                                    sx={{ marginTop: "20px" }}
                                    InputProps={
                                        {
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        aria-label="toggle password visibility"
                                                        onClick={handleClickShowPassword}
                                                        onMouseDown={handleMouseDownPassword}
                                                        edge="end"
                                                    >
                                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                                    </IconButton>
                                                </InputAdornment>
                                            )
                                        }
                                    }
                                />
                                <Button variant="contained" color="success" type="submit" sx={{ marginTop: "15px" }} fullWidth >
                                    Login
                                </Button>
                            </form>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Box>
    )
}
