"use client";
import React from "react";
import PageHeader from "../components/header";
import { useForm } from "react-hook-form";

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <div className="h-screen bg-gradient-to-b from-slate-700 to-slate-900">
        <PageHeader />
        <p className="p-4 mt-8 text-center text-xl max-w-[1000px] mx-auto">
          You're just a few steps from starting to keep track and managing your
          finances, create an account below and enjoy our features!
        </p>

        <div className="form-container w-full bg-slate-950 p-4 rounded-md max-w-[500px] mx-auto shadow-slate-800 shadow-md">
          <form className="flex flex-col gap-2">
            <div className="flex flex-col my-5">
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
                {`error will go here`}
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
                {`error will go here`}
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
                {`error will go here`}
              </span>
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Confirm your password</label>
              <input
                {...register("confirmPassword")}
                type="confirmPassword"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
                className="p-2 rounded-sm bg-slate-300 text-black placeholder:slate-100 border-2 border-slate-900 outline-none focus:border-ziniblue focus:border-2"
              />
              <span className="text-sm text-red-400 py-1">
                {`error will go here`}
              </span>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
