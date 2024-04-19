import NavigationMenu from "../../components/navigation/Navigation";
import SearchBar from "../../components/search/Search";
import { MoviesIcon, Bookmark } from "../../assets/icons/Icons";
import { Component } from "react";
import styles from './AppPages.module.css'

export function Movies() {
    return (
        <>
            <div className={styles.navCard}>
                <NavigationMenu />
            </div>
            <div className={styles.card}>
                <div className={styles.search}>
                    <SearchBar />
                </div>
                <div className={styles.catalogue}>
                    <div className={styles.catalogueHeading}>Movies</div>
                    <div className={styles.catalogueList}>
                        <div className={styles.catalogueItem}>
                            <div className={styles.movie}>
                                <img src="https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                                <div className={styles.bookmarkCircle}>
                                    <div className={styles.bookmarkIcon}>
                                        <Bookmark />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.movieDetails}>
                                <div className={styles.movieYear}>
                                    2017
                                </div>
                                <div className={styles.circle}></div>
                                <div className={styles.iconWrap}>
                                    <div className={styles.icon}>
                                        <MoviesIcon />
                                    </div>
                                    Movie
                                </div>
                                <div className={styles.circle}></div>
                                <div className={styles.rating}>
                                    E
                                </div>
                            </div>
                            <div className={styles.movieTitle}>
                                The Diary
                            </div>
                        </div>
                        <div className={styles.catalogueItem}>
                            <div className={styles.movie}>
                                <img src="https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                                <div className={styles.bookmarkCircle}>
                                    <div className={styles.bookmarkIcon}>
                                        <Bookmark />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.movieDetails}>
                                <div className={styles.movieYear}>
                                    2023
                                </div>
                                <div className={styles.circle}></div>
                                <div className={styles.iconWrap}>
                                    <div className={styles.icon}>
                                        <MoviesIcon />
                                    </div>
                                    Movie
                                </div>
                                <div className={styles.circle}></div>
                                <div className={styles.rating}>
                                    E
                                </div>
                            </div>
                            <div className={styles.movieTitle}>
                                Same Answer II
                            </div>
                        </div>
                        <div className={styles.catalogueItem}>
                            <div className={styles.movie}>
                                <img src="https://images.pexels.com/photos/15466732/pexels-photo-15466732/free-photo-of-high-school-in-vogue.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                                <div className={styles.bookmarkCircle}>
                                    <div className={styles.bookmarkIcon}>
                                        <Bookmark />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.movieDetails}>
                                <div className={styles.movieYear}>
                                    2015
                                </div>
                                <div className={styles.circle}></div>
                                <div className={styles.iconWrap}>
                                    <div className={styles.icon}>
                                        <MoviesIcon />
                                    </div>
                                    Movie
                                </div>
                                <div className={styles.circle}></div>
                                <div className={styles.rating}>
                                    E
                                </div>
                            </div>
                            <div className={styles.movieTitle}>
                                Homecoming
                            </div>
                        </div>
                        <div className={styles.catalogueItem}>
                            <div className={styles.movie}>
                                <img src="https://images.pexels.com/photos/236277/pexels-photo-236277.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                                <div className={styles.bookmarkCircle}>
                                    <div className={styles.bookmarkIcon}>
                                        <Bookmark />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.movieDetails}>
                                <div className={styles.movieYear}>
                                    1996
                                </div>
                                <div className={styles.circle}></div>
                                <div className={styles.iconWrap}>
                                    <div className={styles.icon}>
                                        <MoviesIcon />
                                    </div>
                                    Movie
                                </div>
                                <div className={styles.circle}></div>
                                <div className={styles.rating}>
                                    18+
                                </div>
                            </div>
                            <div className={styles.movieTitle}>
                                During the Hunt
                            </div>
                        </div>
                        <div className={styles.catalogueItem}>
                            <div className={styles.movie}>
                                <img src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <div className={styles.bookmarkCircle}>
                                    <div className={styles.bookmarkIcon}>
                                        <Bookmark />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.movieDetails}>
                                <div className={styles.movieYear}>
                                    2015
                                </div>
                                <div className={styles.circle}></div>
                                <div className={styles.iconWrap}>
                                    <div className={styles.icon}>
                                        <MoviesIcon />
                                    </div>
                                    Movie
                                </div>
                                <div className={styles.circle}></div>
                                <div className={styles.rating}>
                                    E
                                </div>
                            </div>
                            <div className={styles.movieTitle}>
                                Van Life
                            </div>
                        </div>
                        <div className={styles.catalogueItem}>
                            <div className={styles.movie}>
                                <img src="https://images.unsplash.com/photo-1592398276785-f636168c02e0?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                                <div className={styles.bookmarkCircle}>
                                    <div className={styles.bookmarkIcon}>
                                        <Bookmark />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.movieDetails}>
                                <div className={styles.movieYear}>
                                    2021
                                </div>
                                <div className={styles.circle}></div>
                                <div className={styles.iconWrap}>
                                    <div className={styles.icon}>
                                        <MoviesIcon />
                                    </div>
                                    Movie
                                </div>
                                <div className={styles.circle}></div>
                                <div className={styles.rating}>
                                    18+
                                </div>
                            </div>
                            <div className={styles.movieTitle}>
                                Sex on the Beach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

Component.displayName = "Movies";
