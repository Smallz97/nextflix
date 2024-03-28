import { HomeIcon, LogoIcon, MoviesIcon, SeriesIcon, BookMarkIcon } from '../../assets/icons/Icons';
import styles from './Navigation.module.css'
const NavigationMenu = () => {
    return (
        <div className={styles.card}>
            <div className={styles.logo}>
                <LogoIcon />
            </div>
            <div className={styles.navItems}>
                <div className={styles.navIcon}>
                    <HomeIcon />
                </div>
                <div className={styles.navIcon}>
                    <MoviesIcon />
                </div>
                <div className={styles.navIcon}>
                    <SeriesIcon />
                </div>
                <div className={styles.navIcon}>
                    <BookMarkIcon />
                </div>
            </div>
            <div className={styles.imageWrap}>
                <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="profile" className={styles.image} />
            </div>
        </div>
    );
}

export default NavigationMenu