import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

export default function PageHeader() {
  const pathName = usePathname();

  return (
    <div className="header-container flex justify-between items-center bg-slate-900 w-screen p-4 shadow-sm">
      <div className="left-container w-full smm:w-max">
        <Link href="/">
          <h1 className="text-2xl text-center">Zini Finances</h1>
        </Link>
      </div>
      <GiHamburgerMenu size={30} className="smm:hidden" />
      <div className="right-container gap-4 hidden smm:flex">
        <ul className="gap-4 smm:flex">
          <li>
            <Link href="/">Login</Link>
          </li>
          <li>
            {pathName != "/register" ? <Link href="#">Register</Link> : null}
          </li>
        </ul>
      </div>
    </div>
  );
}
