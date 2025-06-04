import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import SavedResume from '../../Models/SavedResume';
import './SavedResumesModal.css'; // Import your CSS for styling the modal

//console.log(`Saved Resume from SavedResumesModal.js: ${SavedResume}`);
console.log(`Saved Resume from SavedResumesModal.js type: ${typeof SavedResume}`);

Modal.setAppElement('#root'); // Set the app element for accessibility

const SavedResumesModal = ({ isOpen, onRequestClose }) => {
  //if (!isOpen) return null; // Don't render the modal if it's not open
  const [saves, setSaves] = useState([]);
  const navigate = useNavigate(); // Navigate function

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/saves.json'); // Adjust the path to your JSON file
        const data = await response.json();

        // Convert JSON data to Saves instances
        //const saveInstances = data.map(saves => new SavedResume(saves.name));
        //console.log("SavedResume Type:", typeof SavedResume);
        //setSaves(saveInstances);
        setSaves(data);
        //console.log('Fetched saves:', saveInstances);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  //const handleButtonClick = (name) => {
  //  alert(`You clicked on: ${name}`);
  //};

  const handleNavigate = (route) => {
    navigate(`/resumes/${route}`); // Navigate to the specified route
    //onClose();
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
      {saves.map((save, index) => (
        <button
          key={index}
          className="saved-resume-button"
          onClick={() => handleNavigate(save.name)}>
          {save.name.split('.json')[0]} {/* Display the name without the .json extension */}
        </button>
      ))}
      <button className="close-button" onClick={onRequestClose}>Close</button>
    </Modal>
  );
}

export default SavedResumesModal;

/*
{resumes.length > 0 ? (
        <ul>
          {resumes.map((resume, index) => (
            <li key={index}>{resume.title}</li>
          ))}
        </ul>
      ) : (
        <p>No saved resumes found.</p>
      )}
        */