/*
* MainMenu Component
* This component serves as the main menu for the application.
* It provides links to navigate to different sections of the app.
* The links are placeholders and should be replaced with actual navigation logic
* when integrating with a routing library like React Router.
*/
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import MaterialTitlePanel from '../SideBar/MaterialTitlePanel';
import SidebarContent from '../SideBar/SidebarContent';
import NewResume from '../CreateNewResume/NewResume';
import DataModelTest from '../DataModelTest/DataModelTest';
import ResumePage from '../LoadSavedResume/LoadSavedResume';
import './MainMenu.css';

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

function HomePage() {
  // Use the useState hook to manage the sidebarOpen state
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

  const renderPropCheckbox = prop => (
    <p key={prop}>
      <label htmlFor={prop}>
        <input
          type="checkbox"
          onChange={ev =>
            setSidebarState(prev => ({ ...prev, [prop]: ev.target.checked }))
          }
          checked={sidebarState[prop]}
          id={prop}
        />
        {prop}
      </label>
    </p>
  );

  const renderPropNumber = prop => (
    <p key={prop}>
      {prop}{" "}
      <input
        type="number"
        onChange={ev =>
          setSidebarState(prev => ({
            ...prev,
            [prop]: parseInt(ev.target.value, 10)
          }))
        }
        value={sidebarState[prop]}
      />
    </p>
  );

  const sidebar = <SidebarContent />;

  const contentHeader = (
    <span>
      {!sidebarState.docked && (
        <img
          src="/menu-bar-icon-white-clipart-png.png"
          alt="Menu"
          style={{ cursor: "pointer", width: 30, height: 30 }}
          onClick={menuButtonClick}
        />
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
  
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <Sidebar {...sidebarProps}>
      <MaterialTitlePanel title={contentHeader}>
        <div style={styles.content}>
          <p>
            React Sidebar is a sidebar component for React. It offers the
            following features:
          </p>
          <ul>
            <li>Have the sidebar slide over main content</li>
            <li>Dock the sidebar next to the content</li>
            <li>Touch enabled: swipe to open and close the sidebar</li>
          </ul>
          <p>
            <b>Current rendered sidebar properties:</b>
          </p>
          {[
            "open",
            "docked",
            "transitions",
            "touch",
            "shadow",
            "pullRight"
          ].map(renderPropCheckbox)}
          {["touchHandleWidth", "dragToggleDistance"].map(renderPropNumber)}
        </div>
      </MaterialTitlePanel>
    </Sidebar>
  );
}

function MainMenu() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-resume" element={<NewResume />} />
        <Route path="/data-model-test" element={<DataModelTest />} />
        <Route path="/resumes/:resumeId" element={<ResumePage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default MainMenu;
