import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createNewUser } from '../../configurations/reduxConfig/userSlice';
import { LogoIcon } from '../../assets/icons/Icons'
import styles from './Login.module.css';

const Login = () => {
    // Setting form data variables
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.id]: event.target.value });
    }

    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = formData;
        dispatch(createNewUser({ email, password }));
    }

    return (
        <div className={styles.card}>
            <div className={styles.logo}>
                <LogoIcon />
            </div>
            <form className={styles.authForm} onSubmit={handleSubmit}>
                <div className={styles.heading}>Login</div>
                <div className={styles.inputWrapper}>
                    <label htmlFor="email"></label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="off"
                        aria-required="true"
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
                        className={`${styles.formInput} ${styles.password}`}
                    />
                </div>
                <button className={styles.button} type="submit">Login to your account</button>
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