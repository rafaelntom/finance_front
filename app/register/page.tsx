"use client";
import React, { useContext } from "react";
import PageHeader from "../components/header";
import { useForm } from "react-hook-form";
import { RegisterPayload, RegisterSchema } from "../schemas/register.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { AuthContext } from "../context/authContext";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPayload>({ resolver: zodResolver(RegisterSchema) });

  const { registerUser } = useContext(AuthContext)!;

  const handleRegisterForm = (data: RegisterPayload) => {
    registerUser(data);
    console.log(data);
  };
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-slate-700 to-slate-900">
        <PageHeader />
        <p className="p-4 mt-8 text-center text-xl max-w-[1000px] mx-auto font-extralight pb-5">
          You're just a few steps away from starting to keep track of and
          managing your finances. Create an account below and enjoy our
          features!
        </p>

        <div className="form-container w-full bg-slate-950 p-4 rounded-md max-w-[500px] mx-auto shadow-slate-800 shadow-md">
          <Link href="/" className="text-zinimagenta ">
            ← Home
          </Link>
          <form
            className="flex flex-col gap-4 pt-5"
            onSubmit={handleSubmit(handleRegisterForm)}
          >
            <div className="flex flex-col">
              <label htmlFor="">Name</label>
              <input
                {...register("name")}
                type="text"
                name="name"
                id="name"
                placeholder="Insert your name"
                className="p-2 rounded-sm bg-slate-300 text-black placeholder:slate-100 border-2 border-slate-900 outline-none focus:border-ziniblue focus:border-2"
              />
              <span className="text-sm text-red-400 py-1">
                {errors.name?.message}
              </span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">E-mail</label>
              <input
                {...register("email")}
                type="email"
                name="email"
                id="email"
                placeholder="Insert your e-mail"
                className="p-2 rounded-sm bg-slate-300 text-black placeholder:slate-100 border-2 border-slate-900 outline-none focus:border-ziniblue focus:border-2"
              />
              <span className="text-sm text-red-400 py-1">
                {errors.email?.message}
              </span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Password</label>
              <input
                {...register("password")}
                type="password"
                name="password"
                id="password"
                placeholder="Insert your password"
                className="p-2 rounded-sm bg-slate-300 text-black placeholder:slate-100 border-2 border-slate-900 outline-none focus:border-ziniblue focus:border-2"
              />
              <span className="text-sm text-red-400 py-1">
                {errors.password?.message}
              </span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Confirm your password</label>
              <input
                {...register("confirmPassword")}
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="p-2 rounded-sm bg-slate-300 text-black placeholder:slate-100 border-2 border-slate-900 outline-none focus:border-ziniblue focus:border-2"
              />
              <span className="text-sm text-red-400 py-1">
                {errors.confirmPassword?.message}
              </span>
            </div>
            <button className="bg-ziniblue p-2 rounded-sm mt-2 hover:bg-[#2f58aa]">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
