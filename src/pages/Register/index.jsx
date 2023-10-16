import { useForm } from "react-hook-form";
import { Input } from "../../components/input";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../components/input/formSchema";
import { api } from "../../services/api";
import styles from "./style.module.scss";
import { toast } from 'react-toastify';

export const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
    });

    const navigate = useNavigate()

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

    const submit = (formData) => {
        delete formData.confirmPassword
        userRegister(formData);
    };


    return (
        <section className={styles.sectionRegister}>
            <div className={styles.header}>
                <img src={logo} alt="Logo" />
                <button className="buttonBack paragraph" onClick={() => { navigate("/") }}>Voltar</button>
            </div>
            <div className={styles.divForm}>
                <h1 className="title1">Crie sua conta</h1>
                <p className="paragraph">Rapido e grátis, vamos nessa</p>
                <form onSubmit={handleSubmit(submit)}>
                    <Input label="Nome" type="text" placeholder="Digite aqui seu nome" {...register("name")} error={errors.name} />
                    <Input label="Email" type="email" placeholder="Digite aqui seu email" {...register("email")} error={errors.email} />
                    <Input label="Senha" type="password" placeholder="Digite aqui sua senha" {...register("password")} error={errors.password} />
                    <Input label="Confirmar Senha" type="password" placeholder="Digite novamente sua senha" {...register("confirmPassword")} error={errors.confirmPassword} />
                    <Input label="Bio" type="" placeholder="Fale Sobre você" {...register("bio")} error={errors.bio} />
                    <Input label="Contato" type="text" placeholder="Opção de contato" {...register("contact")} error={errors.contact} />
                    <label className="headline">
                        Selecionar módulo
                        <select {...register("course_module")}>
                            <option value="Primeiro módulo" className="title2">Primeiro Módulo</option>
                        </select>
                    </label>
                    <button className="title2 buttonSendRegis" type="submit">Cadastrar</button>
                </form>
            </div>
        </section>
    )
}