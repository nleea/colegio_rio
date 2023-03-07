import { PropsWithChildren } from "react";
import { ButtonTheme } from "./theme/buttonTheme";

export const Button = ({ children, color = "#5a8dee", fontSize = "1rem", weight = 400, textColor = "white", width = "100px", onClick }: { width?: string | number, textColor?: string, color?: string, fontSize?: number | string, weight?: number, onClick?: any } & PropsWithChildren) => {
    return (
        <ButtonTheme color={color} fontSize={fontSize} weight={weight} textColor={textColor} width={width} onClick={onClick} >
            {children}
        </ButtonTheme>
    )
}