import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import MainMenu from './components/MainMenu/MainMenu'
import './App.css';

function App() {
  // Use the useState hook to manage the sidebarOpen state
  const [sidebarOpen, setSidebarOpen] = useState(true);

/*
  return (
    <div className="App">
      <header className="App-header">
        <MainMenu />
      </header>
    </div>
  );*/
  return (
    <Sidebar
      sidebar={<b>Sidebar content</b>}
      open={sidebarOpen}
      onSetOpen={setSidebarOpen}
      styles={{ sidebar: { background: "white" } }}
    >
      <button onClick={() => setSidebarOpen(true)}>
        Open sidebar
      </button>
    </Sidebar>
  )
}

export default App;

/* eslint-disable react/jsx-filename-extension */
    /* original function App
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */