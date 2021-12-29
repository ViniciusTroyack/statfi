import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const token = localStorage.getItem("statfi:token") || "";
    const [auth, setAuth] = useState(token);

    const logIn = (data, history) => {
        api
            .post("/users/v1/login", data)
            .then((response) => {
                const token = response.data.token;
                localStorage.clear();
                localStorage.setItem("statfi:token", JSON.stringify(token));
                setAuth(token);
                history("/dashboard");
                toast.success("Usuário logado com sucesso!");
            })
            .catch((err) => {
                toast.error(
                    "Verifique seus dados. Caso seja um novo usuário, crie sua conta."
                );
            });
    };

    return (
        <AuthContext.Provider value={{ token: auth, setAuth, logIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);