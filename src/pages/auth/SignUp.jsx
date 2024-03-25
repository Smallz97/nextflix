import styles from './style.module.css'
import { LogoIcon } from '../../assets/icons/IconsList'

const SignUp = () => {
    return (
        <div className={styles.card}>
            <div className={styles.logo}>
                <LogoIcon />
            </div>
            <form action="POST">
                <div className={styles.actionText}>Sign Up</div>
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
                        className={styles.formInput}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="password-two"></label>
                    <input
                        type="password"
                        id="password-two"
                        name="password-two"
                        aria-required="true"
                        placeholder="Repeat Password"
                        className={`${styles.formInput} ${styles.password}`}
                    />
                </div>
                <button className={styles.button} type="submit">Create an account</button>
                <div className={styles.altAction}>
                    <p>
                        Already have an account? <span>Login</span>
                    </p>
                </div>
            </form>
        </div>
    );
}

export default SignUp