import React from "react";
import { useModalStore } from "../store";
import { useEditModal } from "../utils/modalUtils";

export const EditModal = () => {
  const { editModalState, closeEditModal, openEditModal } = useEditModal();

  if (!editModalState) {
    return (
      <div className="">
        <button className="bg-slate-500 w-full" onClick={openEditModal}>
          Open modal!
        </button>
      </div>
    );
  }

  return (
    <div className="background-overlay-container fixed z-10 inset-0 bg-gray-500 bg-opacity-95">
      <button onClick={closeEditModal} className="bg-teal-600 w-full">
        Teste
      </button>
    </div>
  );
};
