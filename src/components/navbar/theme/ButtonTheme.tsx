import { createTheme } from "@mui/material/styles";

export const ButtonTheme = createTheme({
    components: {
        MuiButton: {
            styleOverrides: {
                sizeSmall: true,
                root: {
                    fontSize: "1rem",
                    border: '1px solid black',
                    borderRadius: '2rem',
                    padding: "0.5rem",
                    display: 'flex',
                    flexDirection: 'row',
                    height: "80%",
                    width: "6rem",
                    backgroundColor: 'rgb(3, 150, 250)',
                    ":hover": {
                        backgroundColor: 'lightgray'
                    }
                }
            }
        }
    }
});