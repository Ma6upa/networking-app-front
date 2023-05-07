import React from 'react';
import { Route, Routes } from "react-router-dom";
import { AuthPage } from './pages/AuthPage';
import { RegistrationPage } from './pages/RegistrationPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<AuthPage />}/>
        <Route path="/registration" element={<RegistrationPage />}/>
      </Routes>
    </>
  );
}

export default App;
