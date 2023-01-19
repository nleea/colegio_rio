import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';
import { IconButton, MenuIcon, CloseIcon, UserIconConfig } from "@/components/navbar/icons/icons";
import { ThemeProvider } from "@mui/material/styles";
import { ButtonTheme } from "@/components/navbar/theme/ButtonTheme";
import { ProgressPolymorphys } from "@/components/UI/ProgressPolymorphys";
import Divider from "@mui/material/Divider";


export function MenuAppBar({ handleSidebarDisplay, displaySidebar }: { handleSidebarDisplay: (e: any) => void, displaySidebar: boolean }) {
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

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
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 0 }}
                        onClick={handleSidebarDisplay}
                    >
                        {displaySidebar ? <CloseIcon className='animation-close' fontSize='large' /> : <MenuIcon className='animation-menu' fontSize='large' />}
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Menu
                    </Typography>
                    {auth && (
                        <div>
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
                                <MenuItem>Correo@gmail.com</MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>Cahnge Password</MenuItem>
                                <MenuItem onClick={handleClose}>
                                    Settings&nbsp;
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleClose}>Cahnge Password</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    );
}