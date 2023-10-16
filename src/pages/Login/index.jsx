import logo from "../../assets/logo.svg";
import { useForm } from "react-hook-form";
import { Input } from "../../components/input";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import styles from "./style.module.scss";
import { loginSchema } from "../../components/input/LoginSchema";
import { api } from "../../services/api";

export const LoginPage = ({ setUserInfo }) => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const userLogin = async (formData) => {
        try {
            const { data } = await api.post('/sessions', formData);
            localStorage.setItem("@TOKEN", data.token);
            setUserInfo({
                name: data.user.name,
                module: data.user.course_module
            })
            navigate("/dashboard")
        } catch (error) {
            console.log(error);
        }
    }

    const navigate = useNavigate()

    const submit = (formData) => {
        userLogin(formData);
    };

    return (
        <section className={styles.section}>
            <div>
                <img src={logo} alt="Logo" />
            </div>
            <div className={styles.divForm}>
                <form onSubmit={handleSubmit(submit)}>
                    <h2 className="title1">Login</h2>
                    <Input label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")} error={errors.email} />
                    <Input label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")} error={errors.password} />
                    <button className="title2 buttonLogin" type="submit">Entrar</button>
                </form>
                <p className="headline">Ainda não possui uma conta?</p>
                <button className="title2 buttonRegister" onClick={() => { navigate("/register") }}>Cadastre-se</button>
            </div>
        </section>
    )
}