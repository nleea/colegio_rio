import { useState } from "react";
import {MenuAppBar} from "@/layout/Navbar/Navbar";
import SideBar from "@/layout/Sidebar/SideBar";
import { Dashboard as DashboardContainer, SideBarContainer } from "./style/DashboardStyle";
import { Media } from "@/utils/media/media";
import { ProgressPolymorphys } from "@/components/UI/ProgressPolymorphys";
import { Outlet } from "react-router-dom";
import "./style/dashboard.scss";

export const DashBoard = () => {

    const [displaySidebar, setDisplaySidebar] = useState(!Media);
    const [displaySidebareltive, setDisplaySidebarRelative] = useState(false);

    const handleSidebarDisplay = (e: any) => {
        e.preventDefault();
        if (window.innerWidth > 500) {
            setDisplaySidebar(!displaySidebar);
        } else {
            setDisplaySidebarRelative(!displaySidebareltive);
            setDisplaySidebar(false);
        }
    };

    return (
        <DashboardContainer display={+displaySidebar} >
            <div className="navbar" >
                <MenuAppBar handleSidebarDisplay={handleSidebarDisplay} displaySidebar={displaySidebar} />
                {false && <ProgressPolymorphys type="linear" sx={{ width: '100%' }} child={true} />}
            </div>
            <SideBarContainer show={displaySidebareltive} >
                <SideBar displaySidebar={displaySidebar} />
            </SideBarContainer>
            <div className="main">
                <Outlet />
            </div>
        </DashboardContainer>
    )
}
