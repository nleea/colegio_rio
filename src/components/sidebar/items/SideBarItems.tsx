import { useState, useEffect } from "react";
import { ItemsList, ItemContainer } from "../style/SideBarStyle";
import { Items } from "./Items";
import { iconsMenu, Imenu } from "@/utils/menu/data";

const SidebarItems = ({ displaySidebar, closeHandler }: { displaySidebar: any, closeHandler: any }) => {
    const [activeItem, setActiveItem] = useState(0);
    const [menu, setMenu] = useState<Imenu[]>([]);

    useEffect(() => {
        const newMenu: Imenu[] = [];
        const menuLocal = JSON.parse(localStorage.getItem("menu")!) as Array<any>;

        menuLocal.forEach((menuL) => {
            if (menuL.id_padre === 0) {
                newMenu.push({ ...menuL, icon: iconsMenu[menuL.icon], children: [] })
            } else {
                const index = newMenu.findIndex((m) => m.id === Number(menuL.id_padre));
                if (index === -1) {
                    for (let i of newMenu) {
                        let childindex = i.children?.findIndex((m) => m.id === Number(menuL.id_padre))!;
                        if (i.children && childindex && i.children[childindex].children === undefined) {
                            i.children?.splice(childindex, 1, { ...i.children[childindex], children: [] });
                            if ('children' in i.children![childindex]) {
                                i.children![childindex].children.push({ ...menuL, icon: iconsMenu[menuL.icon] })
                            }
                        } else {
                            if ('children' in i.children![childindex]) {
                                i.children![childindex].children.push({ ...menuL, icon: iconsMenu[menuL.icon] })
                            }
                        }
                    }
                }
                else {
                    newMenu[index]?.children?.push({ ...menuL, icon: iconsMenu[menuL.icon] })
                }
            }
        });
        setMenu(newMenu);
    }, []);

    return (
        <ItemsList>
            {menu.map((itemData, index) => (
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