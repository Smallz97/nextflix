import { useSelector } from "react-redux";
import MovieCard from "../movie-card/movieCard";
import styles from './moviesCatalogue.module.css'

const BookmarkedMoviesCatalogue = ({ filter }) => {
    const { searchQuery } = useSelector((state) => state.search);
    const { bookmarkedMoviesList } = useSelector((state) => state.moviesList);


    let filteredMovies = bookmarkedMoviesList.filter(movie => movie.category === filter)

    const title = filter === 'Movie' ? 'Bookmarked Movies' : 'Bookmarked Series';

    if (searchQuery) {
        filteredMovies = filteredMovies.filter(movie =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    const filteredMoviesCount = filteredMovies.length;

    return (
        <div className={filter === 'Movie' ? styles.bookmarkedMovies : styles.bookmarkedSeries}>
            {searchQuery === "" ? (
                <div className={styles.catalogueHeading}>{title}</div>
            ) : (
                <div className={styles.catalogueHeading}>
                    {filteredMoviesCount === 0
                        ? `No results found for \`${searchQuery}\` in ${title}`
                        : `Found ${filteredMoviesCount} results for \`${searchQuery}\` in ${title}`
                    }
                </div>
            )}
            <div className={styles.catalogue}>
                {filteredMovies.map((movie, index) => (
                    <MovieCard
                        key={index}
                        movie={movie}
                        isBookmarked={movie.isBookmarked}
                        thumbnail={movie.thumbnail.regular}
                    />
                ))}
            </div>
        </div>
    )
}

export default BookmarkedMoviesCatalogue;