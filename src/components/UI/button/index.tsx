import { PropsWithChildren, ButtonHTMLAttributes } from "react";
import { ButtonTheme } from "./theme/buttonTheme";


interface Ibutton {
    color?: string;
    fontSize?: number | string;
    weight?: number;
    textColor?: string;
    width?: string;
    onClick?: any;
    radius?: number | string;
}

type PolymorphicComponentProp<C extends HTMLButtonElement, Props = {}> = PropsWithChildren<Props & ButtonHTMLAttributes<C>>;

export const Button = <C extends HTMLButtonElement>(
    { children, color = "#5a8dee", fontSize = "1rem", weight = 400, textColor = "white", width = "100px", onClick, radius = 5, ...restProps }:
        PolymorphicComponentProp<C, Ibutton>) => {
    return (
        <ButtonTheme color={color} fontSize={fontSize} weight={weight} textColor={textColor} width={width} onClick={onClick} radius={radius} {...restProps} >
            {children}
        </ButtonTheme>
    )
}