import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Typographic = styled(Typography)(({ theme, color, fontSize }) => ({
    fontFamily: "Hanken Grotesk', sans-serif;",
    color: `${color}`,
    fontSize: `${fontSize}`
}));
