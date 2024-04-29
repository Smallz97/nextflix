import { SeriesIcon, MoviesIcon, Bookmark, Bookmarked } from "../../assets/icons/Icons";
import styles from './movieCard.module.css'

const MovieCard = ({ movie, thumbnail }) => {
    const { small, medium, large } = thumbnail;

    return (
        <div className={styles.movieCard}>
            <div className={styles.movie}>
                <picture className={styles.thumbnail}>
                    <source srcSet={`/${small}`} media="(max-width: 39rem)" />
                    <source srcSet={`/${medium}`} media="(min-width: 40rem)" />
                    <source srcSet={`/${large}`} media="(min-width: 65rem)" />
                    <img src={`${medium}`} alt="" />
                </picture>
                <div className={styles.bookmarkIconCircle}>
                    <div className={styles.bookmarkIcon}>
                        {movie.isBookmarked ? <Bookmarked /> : <Bookmark />}
                    </div>
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
    )
}

export default MovieCard;