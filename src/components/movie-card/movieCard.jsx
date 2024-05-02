import { SeriesIcon, MoviesIcon, Bookmark, Bookmarked, PlayIcon } from "../../assets/icons/Icons";
import styles from './movieCard.module.css'

const MovieCard = ({ movie, thumbnail }) => {
    const { small, medium, large } = thumbnail;

    return (
        <div>
            <div className={styles.movie}>
                <div className={styles.thumbnail}>
                    <picture>
                        <source srcSet={`/${small}`} media="(max-width: 39rem)" alt="thumbnail" />
                        <source srcSet={`/${medium}`} media="(min-width: 40rem)" alt="thumbnail" />
                        <source srcSet={`/${large}`} media="(min-width: 65rem)" alt="thumbnail" />
                        <img src={`${medium}`} className={styles.thumbnailImage} alt="thumbnail" />
                    </picture>
                </div>
                <div className={styles.bookmarkIconCircle}>
                    <div className={styles.bookmarkIcon}>
                        {movie.isBookmarked ? <Bookmarked /> : <Bookmark />}
                    </div>
                </div>
                <div className={styles.playIcon}>
                    <div className={styles.play}>
                        <PlayIcon />
                    </div>
                    <div className={styles.text}>Play</div>
                </div>
            </div>
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
    );
}

export default MovieCard;