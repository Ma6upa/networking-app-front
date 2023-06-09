import React, { useEffect } from 'react';
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography
} from "@mui/material"
import { AuthPage } from './pages/AuthPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { UserPage } from './pages/UserPage';
import FeedPage from './pages/FeedPage';
import FriendsPage from './pages/FriendsPage';
import UsersPage from './pages/UsersPage';
import { useTypedSelector } from './hooks/useTypedSelector';

function App() {
  const navigate = useNavigate()
  const { user } = useTypedSelector(state => state.user);

  return (
    <>
      <AppBar position="sticky">
        <Toolbar variant="dense">
          <Link to={'/user/'+user.id} style={{ textDecoration: 'none', color: 'white' }}>
            <Typography component="h2" variant="h6">
              Моя страница
            </Typography>
          </Link>
          <Link to="/feed" style={{ textDecoration: 'none', color: 'white', marginLeft: 20 }}>
            <Typography component="h2" variant="h6">
              Лента
            </Typography>
          </Link>
          <Link to="/friends" style={{ textDecoration: 'none', color: 'white', marginLeft: 20 }}>
            <Typography component="h2" variant="h6">
              Друзья
            </Typography>
          </Link>
          <Link to="/users" style={{ textDecoration: 'none', color: 'white', marginLeft: 20 }}>
            <Typography component="h2" variant="h6">
              Пользователи
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/feed" element={<FeedPage />} />
        <Route path="/friends/" element={<FriendsPage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </>
  );
}

export default App;
