import styled from "styled-components";

export const FormInputStyled = styled.input`
background: white;
border-bottom: 1px solid black;
width: 100%;
color: black;
height: 30px;
margin: 10px;

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