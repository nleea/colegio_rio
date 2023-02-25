import { useState } from "react";
import { Link } from "react-router-dom";
import {
    ItemWrapper,
    ItemName,
    ItemContainer,
    ItemsListChildren
} from "../style/SideBarStyle";
import { ArrowDownIcon, ArrowIcon } from "@/components/sidebar/icons/Icons";
import { Tooltip } from "@mui/material";

const Items = ({ displaySidebar, itemData, closeHandlre, color = "#eaeced", path = '', padding = 0 }: { displaySidebar: any, itemData: any, closeHandlre: any, color?: string, path?: string, activeItem?: number, padding?: number }) => {
    const [active, setActive] = useState(false);

    if ('children' in itemData) {
        return (
            <>
                <Tooltip title={itemData.name} disableHoverListener={displaySidebar} arrow={true} placement="left-start" >
                    <ItemWrapper onClick={() => setActive((p) => !p)} >
                        <itemData.icon />
                        <ItemName displaySidebar={displaySidebar}>
                            {itemData.name}
                        </ItemName>
                        {active ? <ArrowDownIcon /> : <ArrowIcon />}
                    </ItemWrapper>
                </Tooltip>
                <ItemsListChildren show={active} displaySidebar={displaySidebar} >
                    {itemData.children.map((sub: any, index: number) => (
                        <ItemContainer key={index} show={color}  >
                            <Items displaySidebar={displaySidebar} closeHandlre={closeHandlre} itemData={sub} key={index} color={sub.color} path={path.concat(...["/", itemData.path])} padding={0} />
                        </ItemContainer>
                    ))}
                </ItemsListChildren>
            </>
        )
    }

    return (
        <Tooltip title={itemData.name} arrow={true} disableHoverListener={displaySidebar} placement="left-start">
            <Link to={path.concat(...["/", itemData.path])} >
                <ItemWrapper spacing={+true} style={{ paddingRight: padding && 0 }} >
                    <itemData.icon />
                    <ItemName displaySidebar={displaySidebar}>
                        {itemData.name}
                    </ItemName>
                </ItemWrapper>
            </Link>
        </Tooltip>
    );
};

export { Items };
