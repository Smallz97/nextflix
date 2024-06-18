import { useSelector } from "react-redux";
import TrendingMovieCard from "../trending-movie-card/trendingMovieCard";
import styles from './trendingMoviesCatalogue.module.css'

const TrendingMoviesCatalogue = () => {
    const { moviesList } = useSelector((state) => state.moviesList);
    return (
        <div className={styles.trending}>
            <div className={styles.trendingHeading}>Trending</div>
            <div className={styles.trendingMoviesList}>
                {moviesList.filter(movie => movie.thumbnail.trending).map((movie, index) => (
                    <TrendingMovieCard key={index} movie={movie} thumbnail={movie.thumbnail.trending} />
                ))}
            </div>
        </div>
    )
}

export default TrendingMoviesCatalogue;