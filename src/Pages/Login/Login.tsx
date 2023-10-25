// hooks
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useAuthContext } from "../../Context/Authcontext";

// styles
import styles from "./Login.module.css";

export const Login = (): JSX.Element => {
  const { userLoggedIn, setUserLoggedIn } = useAuthContext();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const signIn = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setUserLoggedIn(true);
        console.log(userCredential);
        navigate("/");
      })
      .catch((error) => {
        setError("Please enter a correct email and password!");
        console.log(error.message);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form onSubmit={signIn}>
          <h2>Log in</h2>
          <p style={{ color: "red", margin: "0rem auto", display: "block" }}>
            {error}
          </p>
          <label>
            <span>Username</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
            />
          </label>
          <label>
            <span>Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
            />
          </label>
          <input className={styles.submit} type="submit" value="Submit" />

          <p style={{ color: "#999", margin: "0rem auto", display: "block" }}>
            Want to create an account ?{" "}
            <NavLink to="/register" style={{ color: "var(--primary)" }}>
              Click here
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};
