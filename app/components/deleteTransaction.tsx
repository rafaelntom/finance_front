import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { deleteTransatcion } from "../functions/handle-transactions";
import { useModalSates } from "../utils/modalUtils";
import { useRouter } from "next/navigation";

interface ModalProps {
  transactionId?: number | null;
}

export const DeleteModal: React.FC<ModalProps> = ({ transactionId }) => {
  const router = useRouter();
  const { deleteModalState, closeDeleteModal } = useModalSates();

  if (!deleteModalState) {
    return null;
  }

  const handleDelete = async () => {
    const result = await deleteTransatcion(transactionId!);

    if (result) {
      closeDeleteModal();
      router.replace("/dashboard");
    }
  };

  console.log(transactionId);

  return (
    <div className="background-overlay-container fixed z-10 inset-0 bg-gray-500 bg-opacity-95">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 opacity-100">
        <div className="modal-container w-[80%] bg-slate-950 text-white z-40 rounded-md">
          <div className="modal-overlay bg-opacity-100">
            <div className="modal-header flex justify-end  py-3 px-2">
              <IoIosCloseCircleOutline
                onClick={closeDeleteModal}
                className="transition-all hover:scale-105 hover:cursor-pointer"
                size={30}
              />
            </div>
            <h3 className="font-light py-4 text-lg px-3">
              Are you sure you want to delete this transaction? This action is
              irreversible.
            </h3>
            <div className="btns-container flex gap-5 justify-center px-3 py-4">
              <button
                className="bg-slate-600 p-2 rounded-lg hover:scale-105 transition-all hover:bg-slate-800"
                onClick={closeDeleteModal}
              >
                Cancel
              </button>
              <button
                className="bg-zinimagenta p-2 rounded-lg hover:scale-105 transition-all hover:bg-[#ef4747]"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
