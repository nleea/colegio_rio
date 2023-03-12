import { Outlet, useLocation, Link } from "react-router-dom";
import { Box } from "@mui/material";
import { Button } from "@/components/UI/button/index";

function User() {
    const { pathname } = useLocation();

    return (

        <>
            {!pathname.includes("register") ? <><Box marginTop={"1.5rem"} marginBottom={"1rem"}
                overflow={"auto"} color={"white"} display="flex" flexDirection="column" sx={{ background: "white", alignItems: pathname.includes("/administracion/usuarios") ? "flex-end" : "flex-start" }}>
                <Button textColor="white" width="10%" > <Link to={{ pathname: `/administracion/usuarios/register` }} >Registrar Usuarios</Link> </Button>
            </Box></> : null}
            <Outlet />
        </>

    );
}

export { User };
