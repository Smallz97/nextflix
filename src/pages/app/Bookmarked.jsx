import { Component } from "react"
import BookmarkedMoviesCatalogue from "../../components/movies-catalogue/bookmarkedMoviesCatalogue";

export function Bookmarked() {
    return (
        <>
            <BookmarkedMoviesCatalogue filter={`Movie`} />
            <BookmarkedMoviesCatalogue filter={`TV Series`} />
        </>
    )
}

Component.displayName = "Bookmarked";
