import { useSelector } from "react-redux";
import MovieCard from "../../components/movieCard/movieCard";
import { MoviesIcon, Bookmark } from "../../assets/icons/Icons";
import { Component } from "react";
import styles from './AppPages.module.css'

export function Home() {
    const { moviesList } = useSelector((state) => state.moviesList);
    return (
        <div className={styles.card}>
            {/* <div className={styles.trending}>
                <div className={styles.trendingHeading}>Trending</div>
                <div className={styles.trendingList}>
                    <div className={styles.trendingItem}>
                        <img src="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className={styles.trendImage} />
                        <div className={styles.bookmarkCircle}>
                            <div className={styles.bookmarkIcon}>
                                <Bookmark />
                            </div>
                        </div>
                    </div>
                    <div className={styles.trendingItem}>
                        <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className={styles.trendImage} />
                        <div className={styles.bookmarkCircle}>
                            <div className={styles.bookmarkIcon}>
                                <Bookmark />
                            </div>
                        </div>
                    </div>
                    <div className={styles.trendingItem}>
                        <img src="https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=2676&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className={styles.trendImage} />
                        <div className={styles.bookmarkCircle}>
                            <div className={styles.bookmarkIcon}>
                                <Bookmark />
                            </div>
                        </div>
                    </div>
                    <div className={styles.trendingItem}>
                        <img src="https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className={styles.trendImage} />
                        <div className={styles.bookmarkCircle}>
                            <div className={styles.bookmarkIcon}>
                                <Bookmark />
                            </div>
                        </div>
                    </div>
                    <div className={styles.trendingItem}>
                        <img src="https://images.pexels.com/photos/17771264/pexels-photo-17771264/free-photo-of-black-ford-33.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className={styles.trendImage} />
                        <div className={styles.bookmarkCircle}>
                            <div className={styles.bookmarkIcon}>
                                <Bookmark />
                            </div>
                        </div>
                    </div>
                    <div className={styles.trendingItem}>
                        <img src="https://images.pexels.com/photos/774835/pexels-photo-774835.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" className={styles.trendImage} />
                        <div className={styles.bookmarkCircle}>
                            <div className={styles.bookmarkIcon}>
                                <Bookmark />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            <div className={styles.catalogue}>
                <div className={styles.catalogueHeading}>Recomended for you</div>
                <div className={styles.catalogueList}>
                    {moviesList.map((movie, index) => (
                        <MovieCard key={index} movie={movie} thumbnail={movie.thumbnail.regular} />
                    ))}
                </div>
            </div>
        </div>
    );
}


Component.displayName = "Home";