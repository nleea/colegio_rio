import { createTheme } from "@mui/material";

export const BoxTheme = createTheme({
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: "5px 5px 10px lightgray"
                }
            }
        }
    }
});