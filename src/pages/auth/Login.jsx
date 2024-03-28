import { Link } from 'react-router-dom';
import { LogoIcon } from '../../assets/icons/Icons'
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.card}>
            <div className={styles.logo}>
                <LogoIcon />
            </div>
            <form action="POST" className={styles.authForm}>
                <div className={styles.heading}>Login</div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="email"></label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        aria-required="true"
                        placeholder="Email Address"
                        className={styles.formInput}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="password"></label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        aria-required="true"
                        placeholder="Password"
                        className={`${styles.formInput} ${styles.password}`}
                    />
                </div>
                <Link to='home'>
                    <button className={styles.button} type="submit">Login to your account</button>
                </Link>
                <div className={styles.altAction}>
                    <p>
                        Don't have an account? <span>Sign Up</span>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default Login