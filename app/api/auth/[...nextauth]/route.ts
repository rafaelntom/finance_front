import axiosApi from "@/app/service/api";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { pages } from "next/dist/build/templates/app-page";

const nextAuthOption: NextAuthOptions = {
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },

      async authorize(credentials, req) {
        const response = await fetch("http://localhost:5000/users/signin", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await response.json();
        if (user && response.ok) {
          return user;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
};

const handler = NextAuth(nextAuthOption);

export { handler as GET, handler as POST };
