//import React, { useRef, useState } from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import RichTextEditor from './components/RichTextEditor';
import FetchApp from './services/FetchData';

function HomePage() {
  const navigate = useNavigate();
  
  return (
    <div className="App">
      <header className="App-header">
        <div className="button-row">
          <button
            className="create-new-button"
            type="button"
            onClick={() => navigate('/new-resume')}
          >
            Start a new resume?
          </button>
          <button
            className="create-new-button"
            type="button"
            onClick={() => navigate('/data-model-test')}
          >Data Model Test</button>
          <button
            className="create-new-button"
            type="button"
            onClick={()}>
          </button>
        </div>
      </header>
    </div>
  );
}

function NewResume() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>New Resume Page</h1>
        <h5 style={{ margin: '10px 0px' }}>This is where you can create a new resume.</h5>
        <div className='resume-section-headers'>
          <p style={{ margin: '15px 0px' }}>Profile:</p>
          <RichTextEditor />
        </div>
        <button
          className="save-button"
          type="button"
          onClick={() => alert('Resume saved!')}
        >Save</button>
      </header>
    </div>
  );
}

function DataModelTest() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Data Model Test</h1>
        <h5 style={{ margin: '10px 0px' }}>This is where you can test the data model.</h5>
        <FetchApp />
      </header>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-resume" element={<NewResume />} />
        <Route path="/data-model-test" element={<DataModelTest />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
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