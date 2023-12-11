"use client";
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

    if (authToken) {
      axiosApi.defaults.headers.common.authorization = `Bearer ${cookies["zini_finances"]}`;
    } else {
      router.replace("/");
    }

    setToken(authToken || null);
  }, []);

  return { token };
};
