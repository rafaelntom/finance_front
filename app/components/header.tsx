import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function PageHeader() {
  return (
    <div className="header-container flex justify-between items-center bg-slate-700 w-screen p-4 shadow-sm">
      <div className="left-container w-full smm:w-max">
        <h1 className="text-2xl text-center">Zini Finances</h1>
      </div>
      <GiHamburgerMenu size={30} className="smm:hidden" />
      <div className="right-container gap-4 hidden smm:flex">
        <ul className="gap-4 smm:flex">
          <li>
            <Link href="#">Login</Link>
          </li>
          <li>
            <Link href="#">Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
