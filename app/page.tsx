import Link from "next/link";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export default function Home() {
  return (
    <div className="flex flex-col justify-center  h-screen bg-gradient-to-r from-slate-700 to-slate-900 px-2">
      <div className="login-container w-full bg-slate-950 p-4 rounded-md max-w-[500px] mx-auto shadow-slate-800 shadow-md">
        <div className="text-container flex flex-col justify-center ">
          <h1 className={`${montserrat.className} text-center text-3xl mb-2`}>
            <span className="italic text-zinimagenta font-bold tracking-wide">
              Zini
            </span>{" "}
            <span className="  font-bold">Finances</span>
          </h1>
          <h2
            className={`text-center font-medium uppercase text-3xl tracking-widest`}
          >
            Sign in
          </h2>
        </div>
        <form className="flex flex-col gap-2">
          <div className="flex flex-col my-5">
            <label htmlFor="login-input">E-mail</label>
            <input
              name="login-input"
              type="text"
              id="login-input"
              placeholder="Insert your e-mail"
              className="p-2 rounded-sm bg-slate-300 text-black placeholder:slate-100 border-2 border-slate-900 outline-none focus:border-ziniblue focus:border-2"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password-input">Password</label>
            <input
              name="password-input"
              type="password"
              id="password-input"
              placeholder="Insert your password"
              className="p-2 rounded-sm bg-slate-300 text-black placeholder:slate-100 border-2 border-slate-900 outline-none focus:border-ziniblue focus:border-2"
            />
          </div>
        </form>
        <div className="remember-recover flex justify-between py-4 items-center">
          <div className="left flex justify-center">
            <input type="checkbox" name="remeber-me" id="remeber-me" />
            <label htmlFor="remeber-me" className="pl-2">
              Remember me
            </label>
          </div>

          <div className="right">
            <Link href="#" className="underline font-normal text-zinimagenta">
              Forgot your password?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
