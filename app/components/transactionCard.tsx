import { FaTrashAlt } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { UserTransactions } from "../dashboard/page";
import { useModalSates } from "../utils/modalUtils";
import { useEffect } from "react";

export const TransactionCard = ({
  transaction,
  onModalOpen,
}: {
  transaction: UserTransactions;
  onModalOpen: () => void;
}) => {
  const { openEditModal, openDeleteModal } = useModalSates();

  useEffect(() => {
    onModalOpen();
  }, []);

  return (
    <li className="flex flex-col gap-2 bg-slate-950 p-2 rounded-md">
      <span>{transaction.description}</span>

      <div className="last-row flex justify-between">
        <span>R$ {transaction.amount}</span>
        <div className="icons-container flex gap-4 pr-2">
          <FaTrashAlt
            size={20}
            className="text-slate-300 hover:cursor-pointer hover:scale-105 transition-all"
            onClick={openDeleteModal}
          />
          <MdModeEditOutline
            size={20}
            className="text-slate-300 hover:cursor-pointer hover:scale-105 transition-all"
            onClick={openEditModal}
          />
        </div>
      </div>
      <span
        className={`${
          transaction.type == "INCOME" ? "text-zinigreen" : "text-zinimagenta"
        } font-semibold tracking-wider`}
      >
        {transaction.type}
      </span>
    </li>
  );
};
