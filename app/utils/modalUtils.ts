// modalUtils.ts
import { useModalStore } from "../store";

interface EditModalState {
  editModalState: boolean;
  deleteModalState: boolean;
  openEditModal: () => void;
  closeEditModal: () => void;
  openDeleteModal: () => void;
  closeDeleteModal: () => void;
}

export const useEditModal = (): EditModalState => {
  const {
    editModalState,
    closeEditModal,
    openEditModal,
    deleteModalState,
    closeDeleteModal,
    openDeleteModal,
  } = useModalStore((state) => ({
    editModalState: state.editModalState,
    closeEditModal: state.closeEditModal,
    openEditModal: state.openEditModal,
    deleteModalState: state.deleteModalState,
    openDeleteModal: state.openDeleteModal,
    closeDeleteModal: state.closeDeleteModal,
  }));

  return {
    editModalState,
    closeEditModal,
    openEditModal,
    deleteModalState,
    closeDeleteModal,
    openDeleteModal,
  };
};
