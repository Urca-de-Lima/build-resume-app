/*
* MainMenu Component
* This component serves as the main menu for the application.
* It provides links to navigate to different sections of the app.
* The links are placeholders and should be replaced with actual navigation logic
* when integrating with a routing library like React Router.
*/
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import NewResume from '../CreateNewResume/NewResume';
import DataModelTest from '../DataModelTest/DataModelTest';
import SavedResumesModal from '../../Modals/SaveResumes/SavedResumesModal';
import './MainMenu.css';

function HomePage() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  
  return (
    <div className="button-row">
      <button
        className="main-menu-button"
        type="button"
        onClick={() => navigate('/new-resume')}
      >Start a new resume?
      </button>
      <button
        className="main-menu-button"
        type="button"
        onClick={() => navigate('/data-model-test')}
      >Data Model Test
      </button>
      <button
        className="main-menu-button"
        type="button"
        onClick={(openModal)}
      >Open Modal
      </button>
      <SavedResumesModal isOpen={isOpen} onRequestClose={closeModal} />
    </div>
  );
}

function MainMenu() {
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

export default MainMenu;
