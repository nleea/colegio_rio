import styled from "styled-components";

// Children Component
export const Children = styled.div`
  width: 100%;
  height: 100%;
  margin-left: ${({ displaySidebar }: { displaySidebar: boolean }) =>
    displaySidebar ? "20rem" : "5rem"};
  @media (max-width: 468px) {
    margin-left: 5rem;
  }
`;

// display: ${({ show }: { show: any; background?: any }) =>show ? "block" : "none"};

export const ItemsListChildren = styled.ul`
  display: ${({
    show,
  }: {
    show: any;
    background?: any;
    displaySidebar?: boolean;
  }) => (show ? "block" : "none")};
  list-style: none;
  position: relative;
  top: 100%;
  left: 0;
  padding: 0;
  background: ${({
    background,
  }: {
    show: any;
    background?: any;
    displaySidebar?: boolean;
  }) => (background ? "#eaeced" : "none")};
`;

export const SidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
`;

export const SidebarLogoWrapper = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: ${({ displaySidebar }: { displaySidebar: any }) =>
    displaySidebar ? "space-between" : "center"};
  align-items: center;
  @media (max-width: 468px) {
    justify-content: center;
  }
`;

export const SidebarLogo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SidebarBrand = styled.span`
  display: ${({ displaySidebar }: { displaySidebar: any }) =>
    displaySidebar ? "block" : "none"};
`;

export const SidebarToggler = styled.button`
  cursor: pointer;
  display: ${({ displaySidebar }: { displaySidebar: any }) =>
    displaySidebar ? "block" : "none"};
  @media (max-width: 468px) {
    display: block;
  }
`;




// SidebarItem styles
export const ItemsList = styled.ul`
  list-style: none;
`;

export const ItemContainer = styled.li`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.25rem;
  border-radius: 0.2rem;
  cursor: pointer;

  &:hover {
    background: ${({ show }: { show?: any }) => show};
  }
  &.active {
    background-color: #dbe4f3;
  }

  &.activeChild {
    background-color: #dbe4f3;
  }
`;

export const ItemContainerChild = styled.li`
  margin-top: 0.5rem;
  width: 100%;
  padding: 0.5rem 0.25rem;
  border-radius: 0.2rem;
  cursor: pointer;
  &:hover {
    background: black;
  }
  &.active {
    background-color: #dbe4f3;
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #7c7788;
  padding-right: ${({ spacing }: { spacing?: any }) =>
    spacing ? "1.5rem" : "none"};
`;

export const ItemName = styled.span`
  margin-left: ${({ displaySidebar }: { displaySidebar: any }) =>
    displaySidebar ? "0.5rem" : "0"};
  display: ${({ displaySidebar }: { displaySidebar: any }) =>
    displaySidebar ? "block" : "none"};
  text-transform: capitalize;
`;

// Sidebar Container
export const SidebarContainer = styled.div`
  position: absolute;
  left: 0;
  width: ${({ displaySidebar }: { displaySidebar: any }) =>
    displaySidebar ? "15rem" : "5.5rem"};
  height: 100vh;
  padding: 0.75rem;
  background: #f3f4f4;
  transition: width 350ms ease;
  border-right: 1px solid #d4d8dd;
  overflow-x: hidden;
  ${({ displaySidebar }: { displaySidebar: any }) =>
    displaySidebar && "box-shadow: 8px 0px 12px 0px rgba(0,0,0,0.1)"};
  ${ItemWrapper} {
    justify-content: ${({ displaySidebar }: { displaySidebar: any }) =>
      !displaySidebar && "center"};
  }

  @media (max-width: 500px) {
    width: 15rem !important;
    ${SidebarLogoWrapper} {
      justify-content: space-between;
    }
    ${SidebarBrand} {
      display: block;
    }
    ${SidebarToggler} {
      display: block;
    }
    ${ItemWrapper} {
      justify-content: flex-start;
    }
    ${ItemName} {
      display: block;
      margin-left: 0.5rem;
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
    height: 3px;
  }
  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: #eaeced;
    &:hover {
      background: #d5e0f3;
    }
  }
  @media (max-width: 468px) {
    width: 5rem;
  }
`;
