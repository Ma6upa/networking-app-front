import React from 'react';
import { Route, Routes } from "react-router-dom";
import { AuthPage } from './pages/AuthPage';
import { RegistrationPage } from './pages/RegistrationPage';
import { UserPage } from './pages/UserPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />}/>
        <Route path="/registration" element={<RegistrationPage />}/>
        <Route path="/user/:id" element={<UserPage />}/>
      </Routes>
    </>
  );
}

export default App;
