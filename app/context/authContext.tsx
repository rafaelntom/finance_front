import { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";
import { FormLoginData } from "../schemas/login.schema";
import axiosApi from "../service/api";
import { setCookie, destroyCookie } from "nookies";
import { RegisterPayload } from "../schemas/register.schema";
import { useRouter } from "next/navigation";

interface AuthContextProps {
  login: (data: FormLoginData) => void;
  logout: () => void;
  registerUser: (data: RegisterPayload) => void;
  loading: boolean;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const login = async (data: FormLoginData) => {
    setLoading(true);
    axiosApi
      .post("/users/signin", data)
      .then((res) => {
        setCookie(null, "zini_finances", res.data.access_token, {
          maxAge: 60 * 30,
          path: "/",
        });
      })
      .then(() => {
        router.push("/dashboard");
      })
      .catch((err) => {
        console.error(err);
        if (err.message == "Network Error") {
          return toast.error("We're having problems connecting to the server");
        }
        if (err.response.data.message) {
          return toast.error(`${err.response.data.message}`);
        }

        return toast.error("Something went wrong, try again later");
      })
      .finally(() => {
        setLoading(false);
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
    destroyCookie(null, "zini_finances", { path: "/" });
    router.replace("/");
  };

  return (
    <AuthContext.Provider value={{ login, logout, registerUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
