import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import "react-toastify/dist/ReactToastify.css";

export const KenzieContext = createContext({});

export const KenzieProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const navigate = useNavigate()

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem("@TOKEN");

            if (token) {
                try {
                    const { data } = await api.get('/profile', {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    })
                    setUser(data);
                    navigate("/dashboard");
                } catch (error) {
                    console.log(error);
                    localStorage.clear();
                }
            }
        }
        loadUser();
    }, [])

    const userLogin = async (formData) => {
        try {
            const { data } = await api.post('/sessions', formData);
            localStorage.setItem("@TOKEN", data.token);
            setUser({
                name: data.user.name,
                module: data.user.course_module
            })
            navigate("/dashboard");
        } catch (error) {
            toast.error("Email ou senha incorreta.", {
                toastId: "error"
            })
            console.log(error);
        }
    }

    const userRegister = async (formData) => {
        try {
            await api.post('/users', formData);
            toast.success("Conta criada com sucesso!", {
                toastId: "success"
            });
            navigate("/");
        } catch (error) {
            toast.error("Ops! Algo deu errado.", {
                toastId: "error"
            })
        }
    }

    const logout = () => {
        localStorage.clear();
        navigate("/");
        setUser(null);
    }

    return (
        <KenzieContext.Provider value={{ userLogin, userRegister, setUser, user, logout }}>
            {children}
        </KenzieContext.Provider>
    )
}