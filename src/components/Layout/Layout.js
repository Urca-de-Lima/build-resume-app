import React, { useState } from "react";
import Sidebar from "react-sidebar";
import MaterialTitlePanel from "../SideBar/MaterialTitlePanel";
import SidebarContent from "../SideBar/SidebarContent";
import { Outlet } from "react-router-dom"; // Use Outlet to render page content

const styles = {
  contentHeaderMenuLink: {
    textDecoration: "none",
    color: "white",
    padding: 8
  },
  content: {
    padding: "16px"
  }
};

function Layout() {
  // Use the useState hook to manage the sidebarState
  const [sidebarState, setSidebarState] = useState({
    docked: false,
    open: false,
    transitions: true,
    touch: true,
    shadow: true,
    pullRight: false,
    touchHandleWidth: 20,
    dragToggleDistance: 30
  });

  const onSetOpen = open => setSidebarState(prev => ({ ...prev, open }));

  const menuButtonClick = ev => {
    ev.preventDefault();
    onSetOpen(!sidebarState.open);
  };

  const sidebar = <SidebarContent />;

  const contentHeader = (
    <span>
      {!sidebarState.docked && (
        <a
          onClick={menuButtonClick}
          href="#"
          style={styles.contentHeaderMenuLink}
        >
          ☰
        </a>
      )}
      <span> Resume Editor</span>
    </span>
  );

  const sidebarProps = {
    sidebar,
    docked: sidebarState.docked,
    sidebarClassName: "custom-sidebar-class",
    contentId: "custom-sidebar-content-id",
    open: sidebarState.open,
    touch: sidebarState.touch,
    shadow: sidebarState.shadow,
    pullRight: sidebarState.pullRight,
    touchHandleWidth: sidebarState.touchHandleWidth,
    dragToggleDistance: sidebarState.dragToggleDistance,
    transitions: sidebarState.transitions,
    onSetOpen
  };
  
  return (
    <Sidebar {...sidebarProps}>
      <MaterialTitlePanel title={contentHeader}>
        <Outlet /> {/* This is where page content will be rendered */}
      </MaterialTitlePanel>
    </Sidebar>
  );
};

export default Layout;
