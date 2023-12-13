"use client";
import { decode } from "jsonwebtoken";
import Link from "next/link";
import { parseCookies } from "nookies";
import { useContext, useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from "../context/authContext";
import { fetchUserInfo } from "../functions/fetch-user";

interface UserToken {
  userId: number;
  iat: number;
  exp: number;
  sub: string;
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

  useEffect(() => {
    const fetchData = async () => {
      const cookies = parseCookies();
      const token = cookies["zini_finances"];
      const decodedToken = decode(token) as UserToken | null;

      if (decodedToken) {
        const userId = decodedToken!.userId;
        const profileInfo = await fetchUserInfo(userId, token);
        setUserName(profileInfo.name);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <DashBoardHeader />
      <div className="flex flex-col h-screen bg-gradient-to-r from-slate-700 to-slate-900 px-2 pt-3">
        <span>Welcome {userName}!</span>
      </div>
    </>
  );
}
