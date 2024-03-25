import { LogoIcon, HomeIcon, MoviesIcon, SeriesIcon, BookMarkIcon } from '../../assets/icons/Icons';
import styles from './style.module.css'

const HomePage = () => {
    return (
        <div className={styles.card}>
            <div className={styles.navigation}>
                <LogoIcon />
                <HomeIcon />
                <MoviesIcon />
                <SeriesIcon />
                <BookMarkIcon />
            </div>
        </div>
    );
}

export default HomePage;