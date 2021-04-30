import React from 'react';
import MainNav from './MainNav';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import styles from './styles.module.css';
import { useSelector } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuth);

  return (
    <header className={styles.header}>
      <MainNav />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
