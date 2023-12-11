"use client";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const { token } = useAuth();
  console.log(token);

  return (
    <>
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
              <Link href="/">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col h-screen bg-gradient-to-r from-slate-700 to-slate-900 px-2 pt-3">
        Dashboard page
      </div>
    </>
  );
}
