"use client";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../context/authContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SessionProvider>
        <AuthProvider>{children}</AuthProvider>
      </SessionProvider>
    </>
  );
};
