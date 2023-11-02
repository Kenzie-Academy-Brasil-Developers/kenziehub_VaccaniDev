import styles from "./style.module.scss";
import logo from "../../assets/logo.svg";
import { KenzieContext } from "../../providers/Context";
import { useContext } from "react";
import { TechList } from "./TechList";
import createIcon from "../../assets/createTechIcon.svg";
import { TechContext } from "../../providers/TechContext";
import { CreateModal } from "./CreateModal";
import { EditModal } from "./EditModal";

export const DashBoardPage = () => {
    const { user, logout } = useContext(KenzieContext);
    const { isOpen, setIsOpen, editing, techList } = useContext(TechContext);

    return (
        <section className={styles.sectionDashBoard}>
            <div className={styles.header}>
                <img src={logo} alt="Logo" />
                <button className="title2 buttonExit" onClick={() => logout()}>Sair</button>
            </div>
            <div className={styles.profile}>
                <h2 className="title1">{`Olá, ${user.name}`}</h2>
                <p className="paragraph">{user.course_module}</p>
            </div>
            <div className={styles.content}>
                <div className={styles.techs}>
                    <h3 className="title1">Tecnologias</h3>
                    <button onClick={() => setIsOpen(true)} ><img src={createIcon} alt="Create icon" /></button>
                </div>
                {techList.length >= 1 ? <div className="listContainer">
                    <TechList />
                </div> : null}
            </div>
            {isOpen ? <CreateModal /> : null}
            {editing ? <EditModal /> : null}
        </section>
    );
};
