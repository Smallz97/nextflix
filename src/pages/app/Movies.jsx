import { useSelector } from "react-redux";
import MovieCard from "../../components/movieCard/movieCard";
import { Component } from "react";
import styles from './AppPages.module.css'

export function Movies() {
    const { moviesList } = useSelector((state) => state.moviesList);
    return (
        <div className={styles.card}>
            <div className={styles.catalogue}>
                <div className={styles.catalogueHeading}>Movies</div>
                <div className={styles.catalogueList}>
                    {moviesList.filter(movie => movie.category === "Movie").map((movie, index) => (
                        <MovieCard key={index} movie={movie} thumbnail={movie.thumbnail.regular} />
                    ))}
                </div>
            </div>
        </div>
    )
}

Component.displayName = "Movies";
