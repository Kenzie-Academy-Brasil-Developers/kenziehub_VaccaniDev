import styles from "./style.module.scss";
import logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export const DashBoardPage = ({ userInfo }) => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.clear()
        navigate("/")
    }

    return (
        <section className={styles.sectionDashBoard}>
            <div className={styles.header}>
                <img src={logo} alt="Logo" />
                <button className="title2 buttonExit" onClick={logout}>Sair</button>
            </div>
            <div className={styles.profile}>
                <h2 className="title1">{`Olá, ${userInfo.name}`}</h2>
                <p className="paragraph">{userInfo.module}</p>
            </div>
            <div className={styles.content}>
                <h2 className="title1">
                    {`Que pena! Estamos em desenvolvimento :(`}
                </h2>
                <h3 className="paragraph">
                    Nossa aplicação está em desenvolvimento, em breve teremos
                    novidades
                </h3>
            </div>
        </section>
    );
};
