import Styled from "styled-components";

export const ButtonTheme = Styled.button`
padding: 10px;
margin 10px;
background: ${({ color }: { color: string, fontSize: number | string, weight: number, textColor: string, width: string | number }) => color};
border-radius: 5px;
font-size: ${({ fontSize }: { fontSize: number | string }) => fontSize};
font-weight: ${({ weight = 400 }: { weight: number }) => weight};
color: ${({ textColor }: { textColor: string }) => textColor};
width: ${({ width }: { width: string | number }) => width};

&:disabled {
    background-color: gray;
}
`