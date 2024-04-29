import { useSelector } from "react-redux";
import MovieCard from "../../components/movieCard/movieCard";
import { Component } from "react"
import styles from './AppPages.module.css'

export function BookmarkedMovies() {
    const { moviesList } = useSelector((state) => state.moviesList);
    return (
        <div className={styles.card}>
            <div className={styles.catalogueBookmark}>
                <div className={styles.catalogueHeading}>Bookmarked Movies</div>
                <div className={styles.catalogueList}>
                    {moviesList.filter(movie => movie.category === "Movie" && movie.isBookmarked === true).map((movie, index) => (
                        <MovieCard key={index} movie={movie} thumbnail={movie.thumbnail.regular} />
                    ))}
                </div>
            </div>
            <div className={styles.catalogue}>
                <div className={styles.catalogueHeading}>Bookmarked Series</div>
                <div className={styles.catalogueList}>
                    {moviesList.filter(movie => movie.category === "TV Series" && movie.isBookmarked === true).map((movie, index) => (
                        <MovieCard key={index} movie={movie} thumbnail={movie.thumbnail.regular} />
                    ))}
                </div>
            </div>
        </div>
    )
}

Component.displayName = "Bookmarked Movies";
