import React, { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed z-10 inset-0 bg-gray-500 opacity-75">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="modal-container w-1/2 bg-white z-40">
          <h1 className="text-ziniblue">Hello modals</h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
