// import React from 'react';
// import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const ImgModal = ({ src, alt, isShowModal, onModalClose }) => {
  return (
    <Modal
      isOpen={isShowModal}
      onRequestClose={onModalClose}
      style={customStyles}
    >
      <img src={src} alt={alt} />
    </Modal>
  );
};
