import React, { useState } from 'react'
import styles from "./SignUp.module.css";
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'

const SignUp = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const [warning, setWarning] = useState<string>("")

    const signUp = (e: any) => {
        e.preventDefault();
        if (email === '' || password === '' || confirmPassword === '') {
            setWarning("please enter correct email and password");
        } else if (password !== confirmPassword) {
            setWarning("passwords don't match !");
        }
        else {
            setWarning("");
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    navigate('/login');
                    console.log(userCredential.user.email);
                })
                .then(() => {
                    setEmail("");
                    setPassword("");
                })
                .catch((error) => {
                    setWarning("please enter correct email and password");
                    console.log(error);
                });
        }

    };

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <form onSubmit={signUp}>
                    <h2>Sign Up</h2>
                    <p style={{ color: "red", margin: "0rem auto", display: "block" }}>{warning}</p>
                    <label>
                        <span>Email</span>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="enter your email" />
                    </label>
                    <label>
                        <span>Password</span>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password" />
                    </label>
                    <label>
                        <span>Confirm Password</span>
                        <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="confirm password" />
                    </label>
                    <input className={styles.submit} type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default SignUp