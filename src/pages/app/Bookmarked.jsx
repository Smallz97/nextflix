import { Component } from "react"
import BookmarkedMoviesCatalogue from "../../components/movies-catalogue/bookmarkedMoviesCatalogue";
import styles from './AppPages.module.css'

export function Bookmarked() {
    return (
        <div className={styles.card}>
            <BookmarkedMoviesCatalogue filter={`Movie`} />
            <BookmarkedMoviesCatalogue filter={`TV Series`} />
        </div>
    )
}

Component.displayName = "Bookmarked";
