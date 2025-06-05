/*
* SavedResumesModal component
* This component displays a modal with a list of saved resumes.
* Users can select a resume to edit, which will navigate them to the appropriate route.
* The modal can be closed by clicking the close button or selecting a resume.
*/
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useNavigate } from 'react-router-dom';
import './SavedResumesModal.css'; // Import your CSS for styling the modal

Modal.setAppElement('#root'); // Set the app element for accessibility

const savesdb = '/data/saves.json'; // Path to your JSON file containing saved resumes

const SavedResumesModal = ({ isOpen, onRequestClose }) => {
  //if (!isOpen) return null; // Don't render the modal if it's not open
  const [saves, setSaves] = useState([]);
  const navigate = useNavigate(); // Navigate function

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(savesdb);
        const data = await response.json();

        setSaves(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to handle navigation when a resume is selected
  const handleNavigate = (route) => {
    // TODO:
    // Once I have the name/ID of the resume, call another fetch to get the resume data
    // and then navigate to the appropriate route.
    console.log(`Navigating to resume: ${route}`);
    // Assuming the route is the name of the resume file, e.g., "resume1.json"
    navigate(`/resumes/${route}`); // Navigate to the specified route
    onRequestClose(); // Close the modal after navigation
  }

  return (
    <Modal
      className="modal-content"
      overlayClassName="modal-overlay"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Saved Resumes"
    >
      <h3 className="modal-title-margin">Select a Resume to Edit</h3>
      {saves.length > 0 ? (
        <div className="center-listings">
          {saves.map((save, index) => (
            <button
              key={index}
              className="saved-resume-button"
              onClick={() => handleNavigate(save.name)}>
              {save.name.split('.json')[0]} {/* Display the name without the .json extension */}
            </button>
          ))}
        </div>
      ) : (<p>No saved resumes found.</p>)}
      <button className="close-button" onClick={onRequestClose}>Close</button>
    </Modal>
  );
}

export default SavedResumesModal;
