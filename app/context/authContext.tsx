// authContext.ts
import { createContext, useContext, ReactNode } from "react";
import { FormLoginData } from "../schemas/login.schema";

interface AuthContextProps {
  login: (data: FormLoginData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const login = (data: FormLoginData) => {
    console.log("Logging in...", data);
  };

  const logout = () => {
    console.log("this is the logout function");
  };

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
