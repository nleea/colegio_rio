import { Outlet } from "react-router-dom";
import { Grid } from "@mui/material";

export const Auth = () => {
    return (

        <Grid container sx={{ minHeight: "100vh", backgroundColor: "rgb(238, 242, 246)" }}>
            <Grid item xs={12}>
                <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                    <Grid item xs={6} display="flex" justifyContent="center"  >
                        <Outlet />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>

    )
}