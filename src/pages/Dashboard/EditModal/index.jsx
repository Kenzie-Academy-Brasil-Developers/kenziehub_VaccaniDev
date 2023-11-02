import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../../providers/TechContext";
import { Input } from "../../../components/input";
import styles from "./style.module.scss";

export const EditModal = () => {
    const { editing, techEdit, setEditing } = useContext(TechContext);

    const { register, handleSubmit } = useForm({
        values: {
            title: editing.title,
            status: editing.status,
        }
    });

    const submit = (formData) => {
        techEdit(formData)
    }

    return (
        <div role="dialog" className={styles.createModal}>
            <div className={styles.modalBox}>
                <div className={styles.modalHeader}>
                    <h2 className="title1">Cadastrar Detalhes</h2>
                    <button className="title2" onClick={() => setEditing(false)}>X</button>
                </div>
                <div className={styles.modalForm}>
                    <form onSubmit={handleSubmit(submit)}>
                        <Input label="Nome" type="text" placeholder="Material UI" {...register("title")} />
                        <label className="headline">Status
                            <select required {...register("status")}>
                                <option value="Iniciante" className="title2">Iniciante</option>
                                <option value="Intermediário" className="title2">Intermediário</option>
                                <option value="Avançado" className="title2">Avançado</option>
                            </select>
                        </label>
                        <button className="title2" type="submit">Cadastrar Tecnologia</button>
                    </form>
                </div>
            </div>
        </div>
    )
}