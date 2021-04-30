import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        to="/register"
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Sign up
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
