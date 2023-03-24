import { Outlet } from "react-router-dom";
import { Grid, Paper, Box, Divider, styled, ThemeProvider } from "@mui/material";
import { BoxTheme } from "./themes/themes";
import { AvatarProfile } from "./avatar/Avatar";
import { RouterProfile } from "./routes/Routes.profile";
import { resize, IbreakPoint } from "../../service/hooks/size/resize";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: "black",
}));

export default function Profile() {

    const BreakPoint: IbreakPoint = {
        MOBILE: {
            width: {
                min: 12,
                max: 12
            }
        },
        TABLET: {
            width: {
                min: 12,
                max: 12
            }
        },
        TABLET_LANDSCAPE: {
            width: {
                min: 12,
                max: 12
            }
        },
        DESKTOP: {
            width: {
                min: 3,
                max: 9
            }
        },
    }

    const { media } = resize({ ...BreakPoint });

    return (
        <Box sx={{ flexGrow: 1 }} style={{ height: '100%', width: "90%", margin: "auto" }} >
            <Grid container spacing={2} height="auto" >
                <Grid item xs={12} height="10%" >
                    <Item>Personal Information</Item>
                </Grid>
                <Grid item xs={media?.width?.min as number} height="auto">
                    <ThemeProvider theme={BoxTheme} >
                        <Item>
                            <AvatarProfile />
                            <Divider />
                            <RouterProfile />
                        </Item>
                    </ThemeProvider>
                </Grid>
                <Grid item xs={media?.width?.max as number} height="auto" marginBottom={10} >
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
