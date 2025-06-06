import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import HomePage from './components/Home/HomePage';
import NewResume from './components/CreateNewResume/NewResume';
import DataModelTest from './components/DataModelTest/DataModelTest';
import ResumePage from './components/LoadSavedResume/LoadSavedResume';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}> {/* Sidebar should appear on each page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/new-resume" element={<NewResume />} />
          <Route path="/data-model-test" element={<DataModelTest />} />
          <Route path="/resumes/:resumeId" element={<ResumePage />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
