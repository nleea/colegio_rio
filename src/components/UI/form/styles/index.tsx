import styled from "styled-components";

export const FormInputStyled = styled.input`
background: white;
border-bottom: 1px solid black;
width: 100%;
color: black;
height: 30px;
margin: 10px;
display: ${({ visible }: { visible: boolean }) => visible ? 'block' : 'none'};
&:active, &:hover, &:focus {
    border-bottom: 1px solid blue;
    transition border-bottom 1s linear;
}
`;


export const FormStyled = styled.form`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const FormSelect = styled.select`
    background: white;
    border-bottom: 1px solid black;
    width: 100%;
    color: black;
    height: 30px;
    margin: 10px;
`;

export const FormDate = styled.div`
    width: 100%;
    margin: 10px;
    flex-direction: column;
    display: ${({ visible }:{ visible: boolean }) => visible ? "flex" : "none"};

    & label{
        font-family: “Helvetica”, arial, sans-serif;
        font-size: 1rem;
        line-height: 24px;
    }

    & input {
        padding: 10px;
        font-family: "Roboto Mono",monospace;
        font-size: 18px;
        color: black;
        border: none;
        outline: none;
        margin 2px 0;
        background: transparent;
        border-bottom: 1px solid black;
    }

    & ::-webkit-calendar-picker-indicator{
        background-color: black;
        padding: 5px;
        cursor: pointer;
        border-radius: 3px;
    }
    

`;