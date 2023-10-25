// hooks
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase";

// assets
import { ReactComponent as MenuIcon } from "../../Assets/menu.svg";

import { useAuthContext } from "../../Context/Authcontext";

interface NavBarProps {
  handleClick(): void;
}
interface AuthUser {
  email: string;
}

export const NavBar = ({ handleClick }: NavBarProps): JSX.Element => {
  const { userLoggedIn, setUserLoggedIn } = useAuthContext();
  console.log("userLoggedIn = ", userLoggedIn);

  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [navBg, setNavBg] = useState(false);
  const [mobile, setMobile] = useState<boolean>(
    window.innerHeight < 1200 ? false : true
  );

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        setUserLoggedIn(false);
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    window.addEventListener("scroll", (): void => {
      if (window.scrollY >= 150) {
        setNavBg(true);
      } else {
        setNavBg(false);
      }
    });
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1025) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className={navBg ? styles.active : styles.navbar}>
      <div className={styles.container}>
        <NavLink to="/">
          <div className={styles.logo}>eclinic</div>
        </NavLink>
        <ul className={mobile ? styles.inactive : styles.navigation}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/complaint">Complaint</NavLink>
          </li>
          <li>
            <NavLink to="/search">Search</NavLink>
          </li>
          <li>
            <NavLink to="/news">News</NavLink>
          </li>

          {authUser && userLoggedIn ? (
            <>
              {/* <li>user singed in</li> */}
              <li>{authUser.email}</li>
              <li onClick={userSignOut}>sign out</li>
            </>
          ) : (
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          )}
        </ul>
        <MenuIcon
          onClick={() => handleClick()}
          className={styles.hamburger}
        ></MenuIcon>
      </div>
    </nav>
  );
};
