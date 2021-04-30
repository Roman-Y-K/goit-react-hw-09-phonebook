import React, { Suspense, lazy, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import AppBar from './Components/UserMenu/AppBar';
import Container from './Components/Container';
import authOperations from './redux/auth/auth-operations';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

const HomeView = lazy(() => import('./Components/Views/HomeView'));
const RegisterView = lazy(() => import('./Components/Views/RegisterForm'));
const LoginView = lazy(() => import('./Components/Views/LoginView'));
const ContactsView = lazy(() => import('./Components/ContactsView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Suspense fallback={<p>Please wait...</p>}>
        <Switch>
          <PublicRoute path="/" exact>
            <HomeView />
          </PublicRoute>
          <PrivateRoute path="/contacts" exact>
            <ContactsView />
          </PrivateRoute>
          <PublicRoute path="/register" exact restricted>
            <RegisterView />
          </PublicRoute>
          <PublicRoute path="/login" exact restricted>
            <LoginView />
          </PublicRoute>
        </Switch>
      </Suspense>
    </Container>
  );
}
