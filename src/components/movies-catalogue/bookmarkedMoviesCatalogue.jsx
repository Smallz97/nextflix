import { useSelector } from "react-redux";
import MovieCard from "../movie-card/movieCard";
import styles from './moviesCatalogue.module.css'

const BookmarkedMoviesCatalogue = ({ filter }) => {
    const { searchQuery } = useSelector((state) => state.search);
    const { moviesList } = useSelector((state) => state.moviesList);

    let filteredMovies = moviesList.filter(movie => movie.category === filter && movie.isBookmarked === true);

    const title = filter === 'Movies' ? 'Bookmarked Movies' : 'Bookmarked Series';

    if (searchQuery) {
        filteredMovies = filteredMovies.filter(movie =>
            movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    const filteredMoviesCount = filteredMovies.length;

    return (
        <>
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
                    <MovieCard key={index} movie={movie} thumbnail={movie.thumbnail.regular} />
                ))}
            </div>
        </>
    )
}

export default BookmarkedMoviesCatalogue;