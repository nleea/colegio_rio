import {
    SidebarContainer,
    SidebarWrapper,
    SidebarLogoWrapper,
    SidebarLogo,
    SidebarBrand
} from "@/components/sidebar/style/SideBarStyle";
import BrandLogo from "../../assets/react.svg";
import { SidebarItems } from "@/components/sidebar/items/SideBarItems";
import { Close } from "../../components/sidebar/icons/Icons";

export default function Sidebar({ displaySidebar, closeHandler }: { children?: any, displaySidebar: boolean, closeHandler: any; }) {

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
                    {<button onClick={closeHandler}><Close></Close></button>}
                    <hr style={{ width: "100%", color: "black" }} />
                    <SidebarItems displaySidebar={displaySidebar} closeHandler={closeHandler} />
                </SidebarWrapper>
            </SidebarContainer>
        </>
    );
}
