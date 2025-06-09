import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainMenu from "../MainMenu/MainMenu";
import HomePage from '../Home/HomePage';
import NewResume from '../CreateNewResume/NewResume';
import DataModelTest from '../DataModelTest/DataModelTest';
import ResumePage from '../LoadSavedResume/LoadSavedResume';
import '../../../src/App.css';

function Layout() {
  return (
    <Router>
      <Routes>
        <Route element={<MainMenu />}> {/* Sidebar should appear on each page */}
          <Route path="/" element={<HomePage />} />
          <Route path="/new-resume" element={<NewResume />} />
          <Route path="/data-model-test" element={<DataModelTest />} />
          <Route path="/resumes/:resumeId" element={<ResumePage />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </Router>
  );
};

export default Layout;
