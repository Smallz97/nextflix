import { useSelector } from "react-redux";
import TrendingMovieCard from "../../components/trending-movie-card/trendingMovieCard";
import MovieCard from "../../components/movie-card/movieCard";
import { Component } from "react";
import styles from './AppPages.module.css'

export function Home() {
    const { moviesList } = useSelector((state) => state.moviesList);
    return (
        <div className={styles.card}>
            <div className={styles.trending}>
                <div className={styles.trendingHeading}>Trending</div>
                <div className={styles.trendingList}>
                    {moviesList.filter(movie => movie.thumbnail.trending).map((movie, index) => (
                        <TrendingMovieCard key={index} movie={movie} thumbnail={movie.thumbnail.trending} />
                    ))}
                </div>
            </div>
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