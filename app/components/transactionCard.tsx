import React from "react";
import { UserTransactions } from "../dashboard/page";

export const TransactionCard = ({
  transaction,
}: {
  transaction: UserTransactions;
}) => {
  return (
    <li className="flex flex-col gap-2 bg-slate-950 p-2 rounded-md">
      <p className="text-lg font-semibold">Transaction:</p>
      <span>{transaction.description}</span>
      <span
        className={
          transaction.type == "INCOME" ? "text-zinigreen" : "text-zinimagenta"
        }
      >
        {transaction.type}
      </span>
      <span>$ {transaction.amount}</span>
    </li>
  );
};
