import { useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import MovieCard from "../movie-card/movieCard";
import styles from './moviesCatalogue.module.css'

const MoviesCatalogue = () => {
    const { searchQuery } = useSelector((state) => state.search);
    const { moviesList } = useSelector((state) => state.moviesList);

    const location = useLocation();

    const filterLogic = {
        '/app/movies': movie => movie.category === "Movie",
        '/app/series': movie => movie.category === "TV Series",
    };

    const filterFunction = filterLogic[location.pathname] || (() => true);

    const title = location.pathname === '/app/movies' ? 'Movies' : location.pathname === '/app/series' ? 'Series' : 'Recommended for you';

    let filteredMovies = moviesList.filter(filterFunction);

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

export default MoviesCatalogue;