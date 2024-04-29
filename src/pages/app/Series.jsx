import { useSelector } from "react-redux";
import MovieCard from "../../components/movie-card/movieCard";
import { Component } from "react";
import styles from './AppPages.module.css'

export function Series() {
    const { moviesList } = useSelector((state) => state.moviesList);
    return (
        <div className={styles.card} id="player">
            <div className={styles.catalogue}>
                <div className={styles.catalogueHeading}>Series</div>
                <div className={styles.catalogueList}>
                    {moviesList.filter(movie => movie.category === "TV Series").map((movie, index) => (
                        <MovieCard key={index} movie={movie} thumbnail={movie.thumbnail.regular} />
                    ))}
                </div>
            </div>
        </div>
    )
}

Component.displayName = "Series";