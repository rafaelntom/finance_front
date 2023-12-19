// modalStore.ts
import { create } from "zustand";

type ModalStore = {
  editModalState: boolean;
  deleteModalState: boolean;
  openEditModal: () => void;
  closeEditModal: () => void;
  openDeleteModal: () => void;
  closeDeleteModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
  editModalState: false,
  deleteModalState: false,
  closeEditModal: () => {
    set(() => ({ editModalState: false }));
  },
  openEditModal: () => {
    set(() => ({ editModalState: true }));
  },
  closeDeleteModal: () => {
    set(() => ({ deleteModalState: false }));
  },
  openDeleteModal: () => {
    set(() => ({ deleteModalState: true }));
  },
}));
