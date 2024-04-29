import { PlayIcon, SeriesIcon, MoviesIcon, Bookmark, Bookmarked } from "../../assets/icons/Icons";
import styles from './trendingMovieCard.module.css'

const TrendingMovieCard = ({ movie, thumbnail }) => {
    const { small, large } = thumbnail;
    return (
        <>
            <div className={styles.trendingItem}>
                <picture className={styles.thumbnail}>
                    <source srcSet={`/${small}`} media="(max-width: 39rem)" />
                    <source srcSet={`/${large}`} media="(min-width: 40rem)" />
                    <img src={`${large}`} alt="" />
                </picture>
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
        </>
    )
}

export default TrendingMovieCard;