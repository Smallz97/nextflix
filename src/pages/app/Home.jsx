import { Component } from "react";
import { useSelector } from "react-redux";
import TrendingMoviesCatalogue from "../../components/trending-movies-catalogue/trendingMoviesCatalogue";
import MoviesCatalogue from "../../components/movies-catalogue/moviesCatalogue";

export function Home() {
    const { searchQuery } = useSelector((state) => state.search);
    return (
        <>
            {searchQuery === "" ? (
                <>
                    <TrendingMoviesCatalogue />
                    <MoviesCatalogue />
                </>
            ) : (<MoviesCatalogue />)
            }
        </>
    );
}

Component.displayName = "Home";