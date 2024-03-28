import NavigationMenu from "../../components/navigationBar/Navigation";
import SearchBar from "../../components/search/Search";
import { SeriesIcon, MoviesIcon } from "../../assets/icons/Icons";
import styles from './HomePage.module.css'

const HomePage = () => {
    return (
        <div className={styles.card}>
            <NavigationMenu />
            <div className={styles.search}>
                <SearchBar />
            </div>
            <div className={styles.trending}>
                <div className={styles.trendingHeading}>Trending</div>
                <div className={styles.trendingList}>
                    <div className={styles.trendingItem}>
                        <img src="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                        <div className={styles.bookmarkIcon}></div>
                    </div>
                    <div className={styles.trendingItem}>
                        <img src="https://images.pexels.com/photos/532263/pexels-photo-532263.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                        <div className={styles.bookmarkIcon}></div>
                    </div>
                    <div className={styles.trendingItem}>
                        <img src="https://images.pexels.com/photos/236277/pexels-photo-236277.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                        <div className={styles.bookmarkIcon}></div>
                    </div>
                    <div className={styles.trendingItem}>
                        <img src="https://images.pexels.com/photos/15466732/pexels-photo-15466732/free-photo-of-high-school-in-vogue.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <div className={styles.bookmarkIcon}></div>
                    </div>
                    <div className={styles.trendingItem}>
                        <img src="https://images.pexels.com/photos/17771264/pexels-photo-17771264/free-photo-of-black-ford-33.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                        <div className={styles.bookmarkIcon}></div>
                    </div>
                    <div className={styles.trendingItem}>
                        <img src="https://images.pexels.com/photos/774835/pexels-photo-774835.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                        <div className={styles.bookmarkIcon}></div>
                    </div>
                </div>
            </div>
            <div className={styles.recommended}>
                <div className={styles.recommendedHeading}>Recomended for you</div>
                <div className={styles.recommendedList}>
                    <div className={styles.recommendedItem}>
                        <div className={styles.movie}>
                            <img src="https://images.pexels.com/photos/1765033/pexels-photo-1765033.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                            <div className={styles.bookmarkIcon}></div>
                        </div>
                        <div className={styles.movieDetails}>
                            <div className={styles.movieYear}>
                                2017
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.iconWrap}>
                                <div className={styles.icon}>
                                    <MoviesIcon />
                                </div>
                                Movie
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.rating}>
                                E
                            </div>
                        </div>
                        <div className={styles.movieTitle}>
                            The Diary
                        </div>
                    </div>
                    <div className={styles.recommendedItem}>
                        <div className={styles.movie}>
                            <img src="https://images.pexels.com/photos/17771264/pexels-photo-17771264/free-photo-of-black-ford-33.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            <div className={styles.bookmarkIcon}></div>
                        </div>
                        <div className={styles.movieDetails}>
                            <div className={styles.movieYear}>
                                2020
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.iconWrap}>
                                <div className={styles.icon}>
                                    <SeriesIcon />
                                </div>
                                Series
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.rating}>
                                PG
                            </div>
                        </div>
                        <div className={styles.movieTitle}>
                            The Great Lands
                        </div>
                    </div>
                    <div className={styles.recommendedItem}>
                        <div className={styles.movie}>
                            <img src="https://images.pexels.com/photos/16757973/pexels-photo-16757973/free-photo-of-b-29-superfortress-in-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                            <div className={styles.bookmarkIcon}></div>
                        </div>
                        <div className={styles.movieDetails}>
                            <div className={styles.movieYear}>
                                2018
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.iconWrap}>
                                <div className={styles.icon}>
                                    <SeriesIcon />
                                </div>
                                Series
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.rating}>
                                18+
                            </div>
                        </div>
                        <div className={styles.movieTitle}>
                            1963
                        </div>
                    </div>
                    <div className={styles.recommendedItem}>
                        <div className={styles.movie}>
                            <img src="https://images.pexels.com/photos/3760607/pexels-photo-3760607.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                            <div className={styles.bookmarkIcon}></div>
                        </div>
                        <div className={styles.movieDetails}>
                            <div className={styles.movieYear}>
                                2023
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.iconWrap}>
                                <div className={styles.icon}>
                                    <MoviesIcon />
                                </div>
                                Movies
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.rating}>
                                E
                            </div>
                        </div>
                        <div className={styles.movieTitle}>
                            Same Answer II
                        </div>
                    </div>
                    <div className={styles.recommendedItem}>
                        <div className={styles.movie}>
                            <img src="https://images.pexels.com/photos/15466732/pexels-photo-15466732/free-photo-of-high-school-in-vogue.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            <div className={styles.bookmarkIcon}></div>
                        </div>
                        <div className={styles.movieDetails}>
                            <div className={styles.movieYear}>
                                2015
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.iconWrap}>
                                <div className={styles.icon}>
                                    <MoviesIcon />
                                </div>
                                Movies
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.rating}>
                                E
                            </div>
                        </div>
                        <div className={styles.movieTitle}>
                            Homecoming
                        </div>
                    </div>
                    <div className={styles.recommendedItem}>
                        <div className={styles.movie}>
                            <img src="https://images.pexels.com/photos/774835/pexels-photo-774835.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                            <div className={styles.bookmarkIcon}></div>
                        </div>
                        <div className={styles.movieDetails}>
                            <div className={styles.movieYear}>
                                2004
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.iconWrap}>
                                <div className={styles.icon}>
                                    <SeriesIcon />
                                </div>
                                Series
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.rating}>
                                PG
                            </div>
                        </div>
                        <div className={styles.movieTitle}>
                            No Land Beyond
                        </div>
                    </div>
                    <div className={styles.recommendedItem}>
                        <div className={styles.movie}>
                            <img src="https://images.pexels.com/photos/2335126/pexels-photo-2335126.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                            <div className={styles.bookmarkIcon}></div>
                        </div>
                        <div className={styles.movieDetails}>
                            <div className={styles.movieYear}>
                                2015
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.iconWrap}>
                                <div className={styles.icon}>
                                    <SeriesIcon />
                                </div>
                                Series
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.rating}>
                                E
                            </div>
                        </div>
                        <div className={styles.movieTitle}>
                            Earth's Untouched
                        </div>
                    </div>
                    <div className={styles.recommendedItem}>
                        <div className={styles.movie}>
                            <img src="https://images.pexels.com/photos/236277/pexels-photo-236277.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" />
                            <div className={styles.bookmarkIcon}></div>
                        </div>
                        <div className={styles.movieDetails}>
                            <div className={styles.movieYear}>
                                1996
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.iconWrap}>
                                <div className={styles.icon}>
                                    <MoviesIcon />
                                </div>
                                Movies
                            </div>
                            <div className={styles.circle}></div>
                            <div className={styles.rating}>
                                18+
                            </div>
                        </div>
                        <div className={styles.movieTitle}>
                            During the Hunt
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage