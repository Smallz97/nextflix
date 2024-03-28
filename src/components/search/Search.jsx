import { SearchIcon } from "../../assets/icons/Icons";
import styles from "./Search.module.css"
const SearchBar = () => {
    return (
        <form className={styles.searchForm}>
            <div className={styles.searchWrapper}>
                <label htmlFor="search"></label>
                <input
                    id="search"
                    type="search"
                    // value={video}
                    className={styles.inputBar}
                    placeholder="Search for movies or TV series"
                // onChange={(e) => setUserToSearch(e.target.value)}
                />
                <div className={styles.icon}>
                    <SearchIcon />
                </div>
                {/* <p className={`${styles.errorMessage} ${notFound ? styles.showErrorMessage : styles.hideErrorMessage}`}>No results</p> */}
                {/* <button className={styles.button} type="submit">Search</button> */}
            </div>
        </form>
    );
}

export default SearchBar