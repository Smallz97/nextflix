import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../../configurations/reduxConfig/authenticationSlice';
import { LogoIcon } from '../../assets/icons/Icons'
import Loading from '../../components/loading/loading';
import { Component } from 'react';
import styles from './Auth.module.css'

export function SignUp() {
    // Setting form data variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordTwo, setPasswordTwo] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const passwordsMatch = password === passwordTwo;
        passwordsMatch ? dispatch(createNewUser(email, password)) : null
    };

    const { loading } = useSelector((state) => state.authentication);
    const { authenticated } = useSelector((state) => state.authentication);

    if (authenticated) {
        return <Navigate to="/app" />;
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className={styles.card}>
                    <div className={styles.logo}>
                        <LogoIcon />
                    </div>
                    <form className={styles.authForm} onSubmit={handleSubmit}>
                        <div className={styles.heading}>Sign Up</div>
                        <div className={styles.inputWrapper}>
                            <label htmlFor="email"></label>
                            <input
                                required
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
                                required
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
                        <div className={styles.inputWrapper}>
                            <label htmlFor="password-two"></label>
                            <input
                                required
                                type="password"
                                id="password-two"
                                name="password-two"
                                value={passwordTwo}
                                aria-required="true"
                                placeholder="Repeat Password"
                                onChange={(e) => setPasswordTwo(e.target.value)}
                                className={`${styles.formInput} ${styles.password}`}
                            />
                        </div>
                        <button className={styles.button} type="submit">Create an account</button>
                        <div className={styles.altAction}>
                            <p>
                                Already have an account? <Link to='/' className={styles.link}><span>Login</span></Link>
                            </p>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}

Component.displayName = "SignUp";