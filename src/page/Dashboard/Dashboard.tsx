import { useState, useEffect } from "react";
import { MenuAppBar } from "@/layout/Navbar/Navbar";
import SideBar from "@/layout/Sidebar/SideBar";
import { Dashboard as DashboardContainer, SideBarContainer } from "./style/DashboardStyle";
//import { Media } from "@/utils/media/media";
import { ProgressPolymorphys } from "@/components/UI/ProgressPolymorphys";
import { Navigate, Outlet, redirect } from "react-router-dom";
import type { RootState } from "../../service/context/app/store";
import { useSelector } from "react-redux";
import "./style/dashboard.scss";

export const DashBoard = () => {

    const [displaySidebar, setDisplaySidebar] = useState(true);
    const [displaySidebareltive, setDisplaySidebarRelative] = useState(false);
    const load = useSelector((state: RootState) => state.store.isLoad);

    const handleSidebarDisplay = (e: any) => {
        //e.preventDefault();
        if (window.innerWidth > 500) {
            setDisplaySidebar(!displaySidebar);
        } else {
            setDisplaySidebarRelative(!displaySidebareltive);
            setDisplaySidebar(false);
        }
    };

    return (
        <DashboardContainer display={+ displaySidebar} >
            <div className="navbar" >
                <MenuAppBar handleSidebarDisplay={handleSidebarDisplay} displaySidebar={displaySidebar} />
                {load && <ProgressPolymorphys type="linear" sx={{ width: '100%' }} child={true} />}
            </div>
            <SideBarContainer show={displaySidebareltive} >
                <SideBar displaySidebar={displaySidebar} closeHandler={handleSidebarDisplay} />
            </SideBarContainer>
            <div className="main" style={{ height: "auto", minHeight: "70vh" }} >
                <Outlet />
            </div>
        </DashboardContainer >

    )
}
