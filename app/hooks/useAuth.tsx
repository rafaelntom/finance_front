"use client";
import "dotenv/config";
import { useRouter } from "next/navigation";
import nookies from "nookies";
import { useEffect, useState } from "react";
import axiosApi from "../service/api";

//! This hook is currently not being used!
export const useAuth = () => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const cookies = nookies.get();
    const authToken: string | null = cookies["zini_finances"];

    const verifyToken = async () => {
      try {
        if (authToken) {
          axiosApi.defaults.headers.common.authorization = `Bearer ${authToken}`;
        } else {
          nookies.destroy(null, "zini_finances");
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        nookies.destroy(null, "zini_finances");
        router.replace("/");
      } finally {
        setToken(authToken || null);
      }
    };

    verifyToken();
  }, []);

  return { token };
};
