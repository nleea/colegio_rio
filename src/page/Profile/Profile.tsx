import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Grid, Paper, Box, Divider, styled, ThemeProvider } from "@mui/material";
import { BoxTheme } from "./themes/themes";
import { AvatarProfile } from "./avatar/Avatar";
import { RouterProfile } from "./routes/Routes.profile";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "black",
}));

export default function Profile() {
    const [media, setMedia] = useState(window.innerWidth > 990);


    useEffect(() => {
        window.addEventListener("resize", ChangeResize);
    }, []);


    const ChangeResize = () => {
        if (window.innerWidth > 990) {
            setMedia(true);
        } else {
            setMedia(false);
        }
    }

    return (
        <Box sx={{ flexGrow: 1 }} style={{ height: '100%', width: "90%", margin: "auto" }} >
            <Grid container spacing={2} height="auto" >
                <Grid item xs={12} height="10%" >
                    <Item>Personal Information</Item>
                </Grid>
                <Grid item xs={media ? 3 : 12} height="auto">
                    <ThemeProvider theme={BoxTheme} >
                        <Item>
                            <AvatarProfile />
                            <Divider />
                            <RouterProfile />
                        </Item>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={media ? 9 : 12} height="auto" marginBottom={20} >
                    <ThemeProvider theme={BoxTheme} >
                        <Item>
                            <Outlet />
                        </Item>
                    </ThemeProvider>
                </Grid>
            </Grid>
        </Box>
    );
}