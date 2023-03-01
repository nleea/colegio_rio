import styled from "styled-components";


const ButtonMenu = styled.button`

display: flex;
flex-direction: column;
width:4rem;
height: 4rem;
background:transparent;
gap: 6px;
justify-content: center;

& > div{
    background: black;
    height: 2px;
    width: 100%;
    border-radius: 5px;
    transition: all .5s;
    transform-origin: left;
}


&:hover div:nth-child(1){
    transform: rotate(45deg);
}

&:hover div:nth-child(2){
    opacity: 0;
}

&:hover div:nth-child(3){
    transform: rotate(-45deg);
}
`;


export { ButtonMenu }