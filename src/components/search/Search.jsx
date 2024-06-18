import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { setSearchQuery } from '../../configurations/reduxConfig/searchSlice';
import { SearchIcon } from "../../assets/icons/Icons";
import styles from "./Search.module.css"
const SearchBar = () => {
    const dispatch = useDispatch();
    const { searchQuery } = useSelector((state) => state.search);
    const [inputFocused, setInputFocused] = useState(false);

    const handleFocused = () => {
        setInputFocused(true);
    };

    const handleNotFocused = () => {
        setInputFocused(false)
    }

    const handleChange = (e) => {
        const videoTitle = e.target.value;
        dispatch(setSearchQuery(videoTitle));
    };
    return (
        <form className={styles.searchForm}>
            <div className={styles.searchWrapper}>
                <label htmlFor="search"></label>
                <input
                    id="search"
                    type="search"
                    value={searchQuery}
                    onFocus={handleFocused}
                    onChange={handleChange}
                    onBlur={handleNotFocused}
                    className={styles.inputBar}
                    placeholder="Search for movies or TV series"
                />
                <div className={styles.icon}>
                    <SearchIcon />
                </div>
            </div>
            {(inputFocused && window.innerWidth >= 65 * 16) && (
                <hr className={styles.horizontalLine} />
            )}
        </form>
    );
}

export default SearchBar