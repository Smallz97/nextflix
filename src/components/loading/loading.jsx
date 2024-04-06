import { LogoIcon } from "../../assets/icons/Icons"
import styles from "./loading.module.css"

const Loading = () => {
    return (
        <div className={styles.card}>
            <div className={styles.circle}>
                <div className={styles.icon}>
                    <LogoIcon />
                </div>
            </div>
        </div>
    );
}

export default Loading;