import React from 'react';

import styles from './styles.module.css';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import { useDispatch, useSelector } from 'react-redux';

export default function UserMenu() {
  const dispatch = useDispatch();

  const name = useSelector(authSelectors.getName);

  const onLogout = () => dispatch(authOperations.logout());

  return (
    <div className={styles.userMenu}>
      <span className={styles.userName}>Welcome, {name}</span>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
