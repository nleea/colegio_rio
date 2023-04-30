import { useState } from "react";
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, MenuItem, Menu, Button } from "@mui/material";
import {  UserIconConfig } from "@/components/navbar/icons/icons";
import { ButtonMenu } from "@/components/navbar/items/buttonMenu";
import { ThemeProvider } from "@mui/material/styles";
import { ButtonTheme } from "@/components/navbar/theme/ButtonTheme";
import { ProgressPolymorphys } from "@/components/UI/ProgressPolymorphys";
import Divider from "@mui/material/Divider";


export function MenuAppBar({ handleSidebarDisplay, displaySidebar }: { handleSidebarDisplay: (e: any) => void, displaySidebar: boolean }) {
    const [auth, setAuth] = useState(true);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);


    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color='default' style={{ boxShadow: 'none', color: "black" }} >
                <Toolbar>
                    <ButtonMenu onClick={handleSidebarDisplay}  >
                        <div></div>
                        <div></div>
                        <div></div>
                    </ButtonMenu>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Menu
                    </Typography>
                    {auth && (
                        <>
                            <ThemeProvider theme={ButtonTheme} >
                                <Button
                                    size="medium"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleMenu}
                                    color="secondary"
                                >
                                    <ProgressPolymorphys child={false} as={UserIconConfig} style={{ color: 'black' }} />
                                </Button>
                            </ThemeProvider>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem>
                                    <Link to={"user/profile/personal"} style={{ color: "black" }} >Profile</Link>
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>Cahnge Password</MenuItem>
                                <MenuItem onClick={handleClose}>
                                    Settings&nbsp;
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>Cahnge Password</MenuItem>
                            </Menu>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}