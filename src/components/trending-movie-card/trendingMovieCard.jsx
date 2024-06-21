import { useSelector } from "react-redux";
import { PlayIcon, SeriesIcon, MoviesIcon, Bookmark, Bookmarked } from "../../assets/icons/Icons";
import styles from './trendingMovieCard.module.css'

const TrendingMovieCard = ({ movie, thumbnail }) => {
    const { bookmarkedMoviesList } = useSelector((state) => state.moviesList);
    const isBookmarked = bookmarkedMoviesList.some(bookmarkedMovie => bookmarkedMovie.id === movie.id);

    const { small, large } = thumbnail;
    return (
        <div className={styles.trendingItem}>
            <div className={styles.thumbnail}>
                <picture>
                    <source srcSet={`/${small}`} media="(max-width: 39rem)" alt="thumbnail" />
                    <source srcSet={`/${large}`} media="(min-width: 40rem)" alt="thumbnail" />
                    <img src={`${large}`} className={styles.thumbnailImage} alt="thumbnail" />
                </picture>
            </div>
            <div className={styles.bookmarkIconCircle}>
                <div className={styles.bookmarkIcon}>
                    {isBookmarked ? <Bookmarked /> : <Bookmark />}
                </div>
            </div>
            <div className={styles.playIcon}>
                <div className={styles.play}>
                    <PlayIcon />
                </div>
                <div className={styles.text}>Play</div>
            </div>
            <div className={styles.movieDetailsWrap}>
                <div className={styles.movieDetails}>
                    <div className={styles.movieYear}>
                        {movie.year}
                    </div>
                    <div className={styles.circle}></div>
                    <div className={styles.iconWrap}>
                        <div className={styles.icon}>
                            {movie.category === "Movie" ? <MoviesIcon fillColor={"#FFFFFF"} /> : <SeriesIcon fillColor={"#FFFFFF"} />}
                        </div>
                        {movie.category}
                    </div>
                    <div className={styles.circle}></div>
                    <div className={styles.rating}>
                        {movie.rating}
                    </div>
                </div>
                <div className={styles.movieTitle}>
                    {movie.title}
                </div>
            </div>
        </div>
    )
}

export default TrendingMovieCard;