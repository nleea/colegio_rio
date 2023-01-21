import { useState } from "react";
import { ItemsList, ItemContainer } from "../style/SideBarStyle";
import { Items } from "./Items";
import { Menu } from "@/utils/menu/data";

const SidebarItems = ({ displaySidebar }: { displaySidebar: any }) => {
    const [activeItem, setActiveItem] = useState(0);

    return (
        <ItemsList>
            {Menu.map((itemData, index) => (
                <ItemContainer
                    onClick={() => setActiveItem(itemData.id)}
                    className={itemData.id === activeItem ? "active" : ""} key={index} >
                    <Items displaySidebar={displaySidebar} key={index} itemData={itemData} activeItem={activeItem} />
                </ItemContainer>
            ))}
        </ItemsList>
    );
};

export { SidebarItems };