"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "./context/authContext";
import { FormLoginData, LoginSchema } from "./schemas/login.schema";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormLoginData>({ resolver: zodResolver(LoginSchema) });

  const { login } = useContext(AuthContext)!;

  const handleFormSubmit = async (formData: FormLoginData) => {
    login(formData);
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center  h-screen bg-gradient-to-r from-slate-700 to-slate-900 px-2">
      <div className="login-container w-full bg-slate-950 p-4 rounded-md max-w-[500px] mx-auto shadow-slate-800 shadow-md">
        <div className="text-container flex flex-col justify-center ">
          <h1 className={`${montserrat.className} text-center text-3xl mb-2`}>
            <span className="italic text-zinimagenta font-bold tracking-wide">
              Zini
            </span>{" "}
            <span className="font-bold">Finances</span>
          </h1>

          <h2
            className={`text-center font-medium uppercase text-3xl tracking-widest`}
          >
            Sign in
          </h2>
        </div>
        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <div className="flex flex-col my-5">
            <label htmlFor="login-input">E-mail</label>
            <input
              {...register("email")}
              name="email"
              type="email"
              id="email"
              placeholder="Insert your e-mail"
              className="p-2 rounded-sm bg-slate-300 text-black placeholder:slate-100 border-2 border-slate-900 outline-none focus:border-ziniblue focus:border-2"
            />
            <span className="text-sm text-red-400 py-1">
              {errors.email?.message}
            </span>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              name="password"
              type="password"
              id="password"
              placeholder="Insert your password"
              className="p-2 rounded-sm bg-slate-300 text-black placeholder:slate-100 border-2 border-slate-900 outline-none focus:border-ziniblue focus:border-2"
              autoComplete="current-password"
            />
          </div>
          <button className="bg-ziniblue p-2 rounded-sm mt-2 hover:bg-[#2f58aa]">
            Login
          </button>
        </form>
        {/* Remember me settings, EDIT THIS LATER ON THE PROJECT */}
        <div className="remember-recover justify-between py-6 items-center hidden">
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
        <div className="flex justify-center pt-4 pb-3">
          <span>
            Don't have an account?{" "}
            <Link href="/register" className="text-zinimagenta underline">
              Sing up!
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
