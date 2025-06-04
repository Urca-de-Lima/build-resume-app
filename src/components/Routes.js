import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ResumePage from './LoadSavedResume/LoadSavedResume';

const ResumeRoutes = () => {
  return (
    <Routes>
      <Route path="/resume/:name" Component={ResumePage} />
    </Routes>
  );
};

export default ResumeRoutes;
