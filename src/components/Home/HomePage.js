import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SavedResumesModal from '../../Modals/SaveResumes/SavedResumesModal';

const HomePage = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: 'calc(10px + 2vmin)', textAlign: 'center' }}>
      <p>
        Welcome to your personal resume editor.
      </p>
      <p>
        How would you like to get started?
      </p>
      </div>
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
        >Work on an old one?
        </button>
        <SavedResumesModal isOpen={isOpen} onRequestClose={closeModal} />
      </div>
    </div>
  );
}

export default HomePage;
