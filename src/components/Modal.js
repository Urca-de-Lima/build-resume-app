import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app element for accessibility

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <h1>My App</h1>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>Modal Title</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default App;
