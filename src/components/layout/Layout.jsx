import { useSelector } from 'react-redux'
import NavigationMenu from '../navigation/Navigation'
import SearchBar from '../search/Search';
import { Outlet, Navigate } from "react-router-dom";
import styles from './Layout.module.css'
import { Component } from "react";

export function Layout() {
    const { authenticated } = useSelector((state) => state.authentication);
    return (
        <>
            {authenticated ?
                <div className={styles.layout}>
                    <div className={styles.navigationBar}>
                        <NavigationMenu />
                    </div>
                    <div className={styles.searchBar}>
                        <SearchBar />
                    </div>
                    <div className={styles.outlet}>
                        <Outlet />
                    </div>
                </div>
                : <Navigate to="/" />
            }
        </>
    );
}

Component.displayName = "Layout"