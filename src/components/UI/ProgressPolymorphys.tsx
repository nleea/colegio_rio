import { Box, SxProps, Theme, CircularProgress, LinearProgress } from "@mui/material";
import { ElementType, PropsWithChildren, ComponentPropsWithRef } from "react";

type AsProp<C extends ElementType> = {
    as?: C;
}

type ColorProps = {
    color?: 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning' | 'inherit',
    sx?: SxProps<Theme>;
    type?: 'circular' | 'linear';
    child?: boolean;
}

type PropstoOmit<C extends ElementType, P> = keyof (AsProp<C> & P)

type PolymorphicComponentProp<C extends ElementType, Props = {}> =
    PropsWithChildren<Props & AsProp<C>> & Omit<ComponentPropsWithRef<C>, PropstoOmit<C, Props>>;

export const ProgressPolymorphys = <C extends ElementType>({ as, color, sx, type = 'circular', child, ...restprops }: PolymorphicComponentProp<C, ColorProps>) => {

    let Component = as || Box;
    let prossgress = {
        "circular": <CircularProgress color={color} hidden={true} />,
        "linear": <LinearProgress color={color} />
    }

    if (child) {
        return (
            <Component sx={sx} >
                {prossgress[type]}
            </Component>
        )
    }

    return (
        <Component {...restprops} sx={sx}  />
    )
}
