"use client";
import { decode } from "jsonwebtoken";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { DeleteModal } from "../components/deleteTransaction";
import { EditModal } from "../components/editTransaction";
import { TransactionCard } from "../components/transactionCard";
import { AuthContext } from "../context/authContext";
import { fetchUserInfo, fetchUserTransactions } from "../functions/fetch-user";

export interface UserToken {
  userId: number;
  iat: number;
  exp: number;
  sub: string;
}

export interface UserTransactions {
  id: number;
  description: string;
  amount: number;
  type: "INCOME" | "OUTCOME";
  userId: number;
}

function DashBoardHeader() {
  const { logout } = useContext(AuthContext)!;

  return (
    <div className="dashboard-header header-container flex justify-between items-center bg-slate-900 w-screen p-4 shadow-sm">
      <div className="left-container w-full smm:w-max">
        <Link href="/">
          <h1 className="text-2xl text-center">Zini Finances</h1>
        </Link>
      </div>
      <GiHamburgerMenu size={30} className="smm:hidden" />
      <div className="right-container gap-4 hidden smm:flex">
        <ul className="gap-4 smm:flex">
          <li>
            <Link href="/" onClick={logout}>
              Logout
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [userName, setUserName] = useState("");
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState<UserTransactions[]>([]);
  const [selectedTransactionId, setSelectedTransactionId] = useState<
    number | null
  >(null);

  useEffect(() => {
    const fetchData = async () => {
      const cookies = parseCookies();
      const token = cookies["zini_finances"];
      const decodedToken = decode(token) as UserToken | null;

      if (decodedToken) {
        const userId = decodedToken!.userId;
        const profileInfo = await fetchUserInfo(userId, token);
        setUserName(profileInfo.name);

        const userTransactions: UserTransactions[] =
          await fetchUserTransactions(token);

        if (userTransactions.length < 1) {
          setTransactions([]);
          setLoading(false);
        }

        setTransactions(userTransactions);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <DashBoardHeader />

      <DeleteModal transactionId={selectedTransactionId} />
      <EditModal />
      <div className="flex flex-col h-screen bg-gradient-to-r from-slate-700 to-slate-900 px-2 pt-3">
        <span>Welcome {userName}!</span>
        <div className="create-transaction-container">{/* TO BE ADDED */}</div>
        {loading ? (
          <div className="flex items-center my-3 text-lg font-semibold text-zinibrown w-full justify-center">
            <span className="text-center">Loading transactions...</span>
          </div>
        ) : null}
        {transactions.length > 0 && !loading ? (
          <ul className="flex flex-col gap-3 my-4 ">
            {transactions.map((transaction) => {
              return (
                <TransactionCard
                  transaction={transaction}
                  key={transaction.id}
                  onModalOpen={() => setSelectedTransactionId(transaction.id)}
                />
              );
            })}
          </ul>
        ) : null}
        {!loading && transactions.length == 0 ? (
          <div className="w-full flex items-center justify-center mt-10">
            <h4 className="font-semibold text-lg">
              You don't have any transactions...
            </h4>
          </div>
        ) : null}
      </div>
    </>
  );
}
