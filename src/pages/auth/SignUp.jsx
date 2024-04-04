import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewUser } from '../../configurations/reduxConfig/authenticationSlice';
import { LogoIcon } from '../../assets/icons/Icons'
import styles from './Login.module.css'

const SignUp = () => {
    // Setting form data variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createNewUser(email, password));
    };

    return (
        <div className={styles.card}>
            <div className={styles.logo}>
                <LogoIcon />
            </div>
            <form className={styles.authForm} onSubmit={handleSubmit}>
                <div className={styles.heading}>Sign Up</div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="email"></label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        autoComplete="off"
                        aria-required="true"
                        placeholder="Email Address"
                        className={styles.formInput}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="password"></label>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        aria-required="true"
                        placeholder="Password"
                        className={styles.formInput}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {/* <div className={styles.inputWrapper}>
                    <label htmlFor="password-two"></label>
                    <input
                        type="password"
                        id="password-two"
                        name="password-two"
                        aria-required="true"
                        placeholder="Repeat Password"
                        className={`${styles.formInput} ${styles.password}`}
                    />
                </div> */}
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