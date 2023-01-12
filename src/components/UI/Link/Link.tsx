import { styled } from '@mui/material/styles';
import { NavLink } from "react-router-dom";

export const LinkItem = styled(NavLink)`
    width: 100%;
    display: flex;
    align-item: center;
    justify-content: left;
    color: black;
    padding: 10px;

    :hover {
        color: rgb(24, 144, 255);
        background-color: rgba(24, 144, 255, 0.12);
    }
`;