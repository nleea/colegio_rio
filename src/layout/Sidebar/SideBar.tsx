import {
    SidebarContainer,
    SidebarWrapper,
    SidebarLogoWrapper,
    SidebarLogo,
    SidebarBrand,
} from "@/components/sidebar/style/SideBarStyle";
import BrandLogo from "../../assets/react.svg";
import { SidebarItems } from "@/components/sidebar/items/SideBarItems";

export default function Sidebar({ displaySidebar }: { children?: any, displaySidebar: boolean }) {

    return (
        <>
            <SidebarContainer displaySidebar={displaySidebar}>
                <SidebarWrapper>
                    <SidebarLogoWrapper displaySidebar={displaySidebar}>
                        <SidebarLogo href="#">
                            <span className="app-brand-logo demo">
                                <img src={BrandLogo} alt="Brand logo" />
                            </span>
                            <SidebarBrand
                                displaySidebar={displaySidebar}
                                className="app__brand__text"
                            >
                                SideBar
                            </SidebarBrand>
                        </SidebarLogo>
                    </SidebarLogoWrapper>
                    <SidebarItems displaySidebar={displaySidebar} />
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
}
