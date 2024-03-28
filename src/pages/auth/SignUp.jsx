import { useState } from 'react';
import { LogoIcon } from '../../assets/icons/Icons'
import { Link } from 'react-router-dom';
import styles from './Login.module.css'

const SignUp = () => {
    // Setting form data variables
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <div className={styles.card}>
            <div className={styles.logo}>
                <LogoIcon />
            </div>
            <form action="POST" className={styles.authForm} onSubmit={handleSubmit}>
                <div className={styles.heading}>Sign Up</div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="email"></label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        aria-required="true"
                        value={formData.email}
                        onChange={handleChange}
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
                        onChange={handleChange}
                        value={formData.password}
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
                <Link to='home'>
                    <button className={styles.button} type="submit">Create an account</button>
                </Link>
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