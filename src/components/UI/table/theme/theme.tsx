import Style from "styled-components";
import { Box } from "@mui/material";


const TableBox = Style(Box)`

width:100%;
height: 100%;
margin: 20px auto 0 auto;
background: ${({$background}:{$background:boolean})=> $background ? "white":"transparent" };
color: black;
border-radius: 0;

& .rol-cell{
    cursor:pointer;
}

`;



const RolComponent = Style.div`
max-width: 100%;
font-family: Inter, sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
font-size: 0.8125rem;
display: inline-flex;
-webkit-box-align: center;
align-items: center;
-webkit-box-pack: center;
justify-content: center;
height: 24px;
border-radius: 16px;
white-space: nowrap;
transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
cursor: default;
outline: 0px;
text-decoration: none;
border: 0px;
padding: 0px;
vertical-align: middle;
box-sizing: border-box;
color: rgb(60, 179, 113);
background-color: rgba(60, 179, 113,.12);
text-transform: capitalize;
overflow: hidden;
text-overflow: ellipsis;
padding-left: 10px;
padding-right: 10px;
white-space: nowrap;
margin: 0 5px;
cursor: pointer;
`;

const WrapperEditIcon = Style.div`
display:flex;
flex-direction: row;
width: 100%;
padding: auto;


& svg {
    visibility:hidden;
}

&:hover {
    svg{
        visibility:visible;
        display: relative;
        height: 20px;
    }
}

`;

export { TableBox, RolComponent, WrapperEditIcon }

