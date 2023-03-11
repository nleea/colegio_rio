import Styled from "styled-components";

export const ButtonTheme = Styled.button`
padding: 10px;
margin 10px;
background: ${({ color }: { color: string, fontSize: number | string, weight: number, textColor: string, width: string | number, radius: string | number }) => color};
border-radius: ${({ radius }: { radius: number | string }) => radius + 'px'};
font-size: ${({ fontSize }: { fontSize: number | string }) => fontSize};
font-weight: ${({ weight = 400 }: { weight: number }) => weight};
color: ${({ textColor }: { textColor: string }) => textColor};
width: ${({ width }: { width: string | number }) => width};

&:disabled {
    background-color: gray;
}

& * {
    color: ${({ textColor }: { textColor: string }) => textColor};
}
& *:hover {
    color: ${({ textColor }: { textColor: string }) => textColor};
}
`