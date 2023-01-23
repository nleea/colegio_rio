import style from "styled-components";

export const Dashboard = style.div`
    display: grid;
    grid-template-areas:
        "sidebar navbar navbar"
        "sidebar main main"
        "sidebar main main";
    grid-template-columns: ${({ display }: { display: any }) =>
      display ? "15rem 1fr 1fr" : "5.5rem 1fr 1fr"};
    grid-template-rows: 0.15fr 1fr 1fr;
    height: 100vh;

    @media(max-width:500px){
        grid-template-areas:
        "navbar navbar navbar"
        "main main main"
        "main main main";
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 0.15fr 1fr 1fr;
    }
`;

export const SideBarContainer = style.div`
    grid-area: sidebar;
    visibility: ${({ show }: { show: any }) => (show ? "visible" : "hidden")};
    position: fixed;
    z-index: 10;

    @media(min-width:500px){
        display: block;
        visibility: visible;

    }
`;
