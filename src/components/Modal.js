// components/Modal.js
import React from "react";
//import './Modal.scss'; // Optional: add styles

export const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        {children}
        <button onClick={onClose} className="modal-close-btn">Close</button>
      </div>
    </div>
  );
};
