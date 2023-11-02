import { useContext } from "react";
import iconEditSVG from "../../../assets/iconEdit.svg";
import trashIconSVG from "../../../assets/trashIcon.svg";
import { TechContext } from "../../../providers/TechContext";
import styles from "./style.module.scss";

export const TechList = () => {
    const { techDelete, techList, setEditing } = useContext(TechContext);

    return (
        <ul className={styles.ulSection}>
            {techList.map((tech) => (
                <li key={tech.id}>
                    <h3 className="title1">{tech.title}</h3>
                    <div className={styles.buttonsDiv}>
                        <h2 className="paragraph">{tech.status}</h2>
                        <div >
                            <button onClick={() => setEditing(tech)}>
                                <img src={iconEditSVG} alt="EditIcon" />
                            </button>
                            <button onClick={() => techDelete(tech.id)}>
                                <img src={trashIconSVG} alt="EditIcon" />
                            </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}