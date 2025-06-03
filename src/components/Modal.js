import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app element for accessibility

const MyModal = ({ isOpen, onRequestClose }) => {
  //const [isOpen, setIsOpen] = useState(false);

  //const openModal = () => setIsOpen(true);
  //const closeModal = () => setIsOpen(false);
/*
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <Modal isOpen={isOpen} onRequestClose={closeModal}>
        <h2>Modal Title</h2>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};
*/
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Example Modal">
      <h2>Modal Title</h2>
      <p>This is the content of the modal.</p>
      <button onClick={onRequestClose}>Close Modal</button>
    </Modal>
  );
};

export default MyModal;
