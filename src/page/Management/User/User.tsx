import { Box, Paper } from "@mui/material";



function User() {
    return (
        <Box maxHeight={"100%"} minHeight={"60%"} marginTop={"3rem"} >
            <Paper sx={{ width: "90%", height: "500px", margin: "auto", borderRadius: "20px" }} elevation={2}   >

            </Paper>
        </Box>
    );
}

export { User }