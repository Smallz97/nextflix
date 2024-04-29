import { Bookmark, Bookmarked } from "../../assets/icons/Icons";
import styles from './trendingMovieCard.module.css'

const TrendingMovieCard = ({ movie, thumbnail }) => {
    const { small, large } = thumbnail;
    return (
        <div className={styles.trendingMovieCard}>
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
            </div>
        </div>
    )
}

export default TrendingMovieCard;