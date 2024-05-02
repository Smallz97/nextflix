import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { LogoIcon, HomeIcon, MoviesIcon, SeriesIcon, BookMarksIcon } from '../../assets/icons/Icons';
import styles from './Navigation.module.css'
const NavigationMenu = () => {
    const routes = ['home', 'movies', 'series', 'bookmarks'];
    const iconArray = [HomeIcon, MoviesIcon, SeriesIcon, BookMarksIcon];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseEnter = (index) => {
        if (window.innerWidth <= 65 * 16) return;
        setHoveredIndex(index);
    };

    const handleMouseLeave = () => {
        if (window.innerWidth <= 65 * 16) return;
        setHoveredIndex(null);
    };

    const active = "#FFFFFF";
    const hovered = "#FC4747"
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
                        className={styles.navIcon}
                        to={`/app/${routes[index]}`}
                        onMouseLeave={handleMouseLeave}
                        onMouseEnter={() => handleMouseEnter(index)}
                    >
                        {({ isActive }) => (
                            <Icon
                                fillColor={hoveredIndex === index ? hovered : (isActive ? active : notActive)}
                            />
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