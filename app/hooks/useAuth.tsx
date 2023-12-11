"use client";
import "dotenv/config";
import jwt, { JwtPayload } from "jsonwebtoken";
import nookies from "nookies";
import { useEffect, useState } from "react";
import axiosApi from "../service/api";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const cookies = nookies.get();
    let authToken: string | null = cookies["zini_finances"];

    const verifyToken = async () => {
      try {
        if (authToken) {
          axiosApi.defaults.headers.common.authorization = `Bearer ${authToken}`;
        } else {
          router.replace("/");
        }
      } catch (error) {
        console.error("Error verifying token:", error);
        nookies.destroy(null, "zini_finances");
        router.replace("/");
      }
    };

    verifyToken();
    setToken(authToken || null);
  }, []);

  return { token };
};
