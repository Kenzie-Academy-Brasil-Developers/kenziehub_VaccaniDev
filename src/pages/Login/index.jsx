import logo from "../../assets/logo.svg";
import styles from "./style.module.scss";
import { useForm } from "react-hook-form";
import { Input } from "../../components/input";
import { Link } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../../components/input/LoginSchema";
import { KenzieContext } from "../../providers/Context";
import { useContext } from "react";

export const LoginPage = () => {
    const { userLogin } = useContext(KenzieContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema),
    });

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
                <Link className="title2 buttonRegister" to="/register">Cadastre-se</Link>
            </div>
        </section>
    )
}