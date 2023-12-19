import { IoIosCloseCircleOutline } from "react-icons/io";
import { useModalSates } from "../utils/modalUtils";

export const EditModal = () => {
  const { editModalState, closeEditModal } = useModalSates();

  if (!editModalState) {
    return null;
  }

  return (
    <div className="background-overlay-container fixed z-10 inset-0 bg-gray-500 bg-opacity-95">
      <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 opacity-100">
        <div className="modal-container w-[80%] bg-slate-950 text-white z-40 rounded-md">
          <div className="modal-overlay bg-opacity-100">
            <div className="modal-header flex justify-end  py-3 px-2">
              <IoIosCloseCircleOutline
                className="transition-all hover:scale-105 hover:cursor-pointer"
                size={30}
                onClick={closeEditModal}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
