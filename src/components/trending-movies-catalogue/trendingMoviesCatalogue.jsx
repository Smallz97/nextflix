import { useSelector } from "react-redux";
import TrendingMovieCard from "../trending-movie-card/trendingMovieCard";
import styles from './trendingMoviesCatalogue.module.css'

const TrendingMoviesCatalogue = () => {
    const { moviesList, bookmarkedMoviesList } = useSelector((state) => state.moviesList);
    const trendingMovies = moviesList.filter((movie) => movie.isTrending);
    return (
        <div className={styles.trending}>
            <div className={styles.trendingHeading}>Trending</div>
            <div className={styles.trendingMoviesList}>
                {trendingMovies.map((movie, index) => {
                    const isBookmarked = bookmarkedMoviesList.some(function (bookmarkedMovie) {
                        return bookmarkedMovie.id === movie.id;
                    });
                    return (
                        <TrendingMovieCard
                            key={index}
                            movie={movie}
                            isBookmarked={isBookmarked}
                            thumbnail={movie.thumbnail.trending}
                        />
                    );
                })}
            </div>
        </div>
    )
}

export default TrendingMoviesCatalogue;