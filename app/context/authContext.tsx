import { ReactNode, createContext } from "react";
import { toast } from "react-toastify";
import { FormLoginData } from "../schemas/login.schema";
import axiosApi from "../service/api";
import { setCookie } from "nookies";
import { RegisterPayload } from "../schemas/register.schema";

interface AuthContextProps {
  login: (data: FormLoginData) => void;
  logout: () => void;
  registerUser: (data: RegisterPayload) => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const login = async (data: FormLoginData) => {
    axiosApi
      .post("/users/signin", data)
      .then((res) => {
        setCookie(null, "zini_finances", res.data.access_token, {
          maxAge: 60 * 30,
          path: "/",
        });
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
        if (err.response.data.message) {
          return toast.error(`${err.response.data.message}`);
        }

        return toast.error("Something went wrong, try again later");
      });
  };

  const registerUser = async (data: RegisterPayload) => {
    axiosApi
      .post("/users/signup", data)
      .then((res) => {
        toast.success("User successfully registered!");
      })
      .catch((err) => {
        console.error(err);
        if (err.response.data.message) {
          return toast.error(`${err.response.data.message}`);
        }

        return toast.error("Something went wrong, try again later");
      });
  };

  const logout = () => {
    console.log("this is the logout function");
  };

  return (
    <AuthContext.Provider value={{ login, logout, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
