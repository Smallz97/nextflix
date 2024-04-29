import { SeriesIcon, MoviesIcon, Bookmarked } from "../../assets/icons/Icons";
import styles from './movieCard.module.css'

const MovieCard = ({ movie, thumbnail }) => {
    const { small, medium, large } = thumbnail;
    console.log(small);

    return (
        <div className={styles.movieCard}>
            <div className={styles.movie}>
                <picture className={styles.thumbnail}>
                    <source srcSet={`../../../public/${small}`} media="(max-width: 39rem)" />
                    <source srcSet={`../../../public/${medium}`} media="(min-width: 40rem)" />
                    <source srcSet={`../../../public/${large}`} media="(min-width: 65rem)" />
                    <img src={`../../../public/${medium}`} alt="" />
                </picture>
                <div className={styles.bookmarkIconCircle}>
                    <div className={styles.bookmarkIcon}>
                        <Bookmarked />
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