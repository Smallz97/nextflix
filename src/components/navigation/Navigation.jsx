import { NavLink } from 'react-router-dom';
import { LogoIcon, HomeIcon, MoviesIcon, SeriesIcon, BookMarkIcon } from '../../assets/icons/Icons';
import styles from './Navigation.module.css'
const NavigationMenu = () => {
    return (
        <nav className={styles.card}>
            <NavLink
                to="/app"
                className={styles.logo}
            >
                <LogoIcon />
            </NavLink>
            <div className={styles.navItems}>
                <NavLink
                    to="/app"
                    className={styles.navIcon}
                >
                    <HomeIcon />
                </NavLink>
                <NavLink
                    to="/app/movies"
                    className={styles.navIcon}
                >
                    <MoviesIcon />
                </NavLink>
                <NavLink
                    to="/app/series"
                    className={styles.navIcon}
                >
                    <SeriesIcon />
                </NavLink>
                <NavLink
                    to="/app/bookmarks"
                    className={styles.navIcon}
                >
                    <BookMarkIcon />
                </NavLink>
            </div>
            <NavLink className={styles.imageWrap}>
                <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="profile" className={styles.image} />
            </NavLink>
        </nav>
    );
}

export default NavigationMenu