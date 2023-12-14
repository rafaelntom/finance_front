import { NextResponse, type NextRequest } from "next/server";
import axiosApi from "./app/service/api";
import { destroyCookie } from "nookies";

const privateRoutes = ["/dashboard"];

export function middleware(request: NextRequest) {
  const cookies = request.cookies.get("zini_finances");

  if (cookies?.value) {
    axiosApi.defaults.headers.common.Authorization = `Bearer ${cookies.value}`;
  }

  if (privateRoutes.includes(request.nextUrl.pathname) && !cookies?.value) {
    const absoluteURL = new URL("/", request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
