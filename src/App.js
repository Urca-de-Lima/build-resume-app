import React from 'react';
import MainMenu from './components/MainMenu/MainMenu'
import './App.css';

function App() {
/*
  return (
    <div className="App">
      <header className="App-header">
        <MainMenu />
      </header>
    </div>
  );*/
  return (
    <div>
      <MainMenu />
    </div>
  );
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