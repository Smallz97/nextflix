import { NavLink } from 'react-router-dom';
import { LogoIcon, HomeIcon, MoviesIcon, SeriesIcon, BookMarksIcon } from '../../assets/icons/Icons';
import styles from './Navigation.module.css'
const NavigationMenu = () => {
    const routes = ['home', 'movies', 'series', 'bookmarks'];
    const iconArray = [HomeIcon, MoviesIcon, SeriesIcon, BookMarksIcon];

    const active = "#FFFFFF";
    const notActive = "#5A698F";

    return (
        <nav className={styles.navbar}>
            <NavLink
                to="/app/home"
                className={styles.logo}
            >
                <LogoIcon />
            </NavLink>
            <div className={styles.navItems}>
                {iconArray.map((Icon, index) => (
                    <NavLink
                        key={index}
                        to={`/app/${routes[index]}`}
                        className={styles.navIcon}
                    >
                        {({ isActive }) => (
                            <Icon fillColor={isActive ? active : notActive} />
                        )}
                    </NavLink>
                ))}
            </div>
            <NavLink className={styles.imageWrap}>
                <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="profile" className={styles.image} />
            </NavLink>
        </nav>
    );
}

export default NavigationMenu