import { useDispatch } from "react-redux";
import { bookmarkMovie, removeBookmark } from "../../configurations/reduxConfig/movieSlice";
import { PlayIcon, SeriesIcon, MoviesIcon, Bookmark, Bookmarked } from "../../assets/icons/Icons";
import PropTypes from 'prop-types';
import styles from './trendingMovieCard.module.css'

const TrendingMovieCard = ({ movie, thumbnail, isBookmarked }) => {
    const dispatch = useDispatch();

    const handleBookmarkToggle = () => {
        if (movie.isBookmarked) {
            dispatch(removeBookmark(movie.id));
        } else {
            dispatch(bookmarkMovie(movie.id));
        }
    };

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
            <div className={styles.bookmarkIconCircle} onClick={handleBookmarkToggle}>
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

TrendingMovieCard.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number.isRequired,
        isBookmarked: PropTypes.bool.isRequired,
        year: PropTypes.number.isRequired,
        category: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    thumbnail: PropTypes.shape({
        small: PropTypes.string.isRequired,
        large: PropTypes.string.isRequired,
    }).isRequired,
    isBookmarked: PropTypes.bool.isRequired,
};

export default TrendingMovieCard;