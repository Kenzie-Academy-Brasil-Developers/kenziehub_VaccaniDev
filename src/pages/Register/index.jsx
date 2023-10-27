import { useForm } from "react-hook-form";
import { Input } from "../../components/input";
import logo from "../../assets/logo.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../../components/input/formSchema";
import styles from "./style.module.scss";
import { useContext } from "react";
import { KenzieContext } from "../../providers/Context";

export const RegisterPage = () => {
    const { userRegister } = useContext(KenzieContext);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
    });

    const submit = (formData) => {
        delete formData.confirmPassword
        userRegister(formData);
    };

    return (
        <section className={styles.sectionRegister}>
            <div className={styles.header}>
                <img src={logo} alt="Logo" />
                <a className="buttonBack paragraph" href="/">Voltar</a>
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
                        <select required {...register("course_module")}>
                            <option value="Primeiro módulo" className="title2">Primeiro Módulo</option>
                            <option value="Segundo Módulo" className="title2">Segundo Módulo</option>
                            <option value="Terceiro módulo" className="title2">Terceiro Módulo</option>
                            <option value="Quarto módulo" className="title2">Quarto Módulo</option>
                            <option value="Quinto módulo" className="title2">Quinto Módulo</option>
                            <option value="Sexto módulo" className="title2">Sexto Módulo</option>
                        </select>
                    </label>
                    <button className="title2 buttonSendRegis" type="submit">Cadastrar</button>
                </form>
            </div>
        </section>
    )
}