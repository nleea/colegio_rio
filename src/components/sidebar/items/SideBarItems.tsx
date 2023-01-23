import { useState } from "react";
import { ItemsList, ItemContainer } from "../style/SideBarStyle";
import { Items } from "./Items";
import { Menu } from "@/utils/menu/data";

const SidebarItems = ({ displaySidebar, closeHandler }: { displaySidebar: any, closeHandler: any }) => {
    const [activeItem, setActiveItem] = useState(0);

    return (
        <ItemsList>
            {Menu.map((itemData, index) => (
                <ItemContainer
                    onClick={() => setActiveItem(itemData.id)}
                    className={itemData.id === activeItem ? "active" : ""} key={index} >
                    <Items displaySidebar={displaySidebar} key={index} itemData={itemData} activeItem={activeItem} closeHandlre={closeHandler} />
                </ItemContainer>
            ))}
        </ItemsList>
    );
};

export { SidebarItems };