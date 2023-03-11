import { Outlet, useLocation, Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Button } from "@/components/UI/button/index";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function User() {
    const { pathname } = useLocation();

    return (
        <>
            <Box marginTop={"1.5rem"} marginBottom={"1rem"}
                overflow={"auto"} color={"white"} display="flex" flexDirection="column" sx={{ background: "white", alignItems: pathname === "/administracion/usuarios" ? "flex-end" : "flex-start" }}>
                {pathname === "/administracion/usuarios" ? <Button textColor="white" width="10%" > <Link to="register" >Registrar Usuarios</Link> </Button> :
                    <Button width="60px" radius={3} > <Link to="/administracion/usuarios" ><ArrowBackIcon /></Link> </Button>}
            </Box>

            <Outlet />
        </>
    );
}

export { User };
