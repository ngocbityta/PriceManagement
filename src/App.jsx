import React from 'react';
import { Routes, Route } from "react-router-dom";
import Signup from './page/main/signup/signup.jsx';
import Login from './page/main/login/Login.jsx';
import Header from './component/Header.jsx';
import Homepage from './page/main/homepage/Homepage.jsx';
const App = () => {

  return (
    <Routes>
      <Route path="/" element={
        <div>
          <Header />
          <Homepage />
        </div>
      } />
      <Route path="/login" element={
        <div>
          <Header />
          <Login />
        </div>
      } />
      <Route path="/signup" element={
        <div>
          <Header />
          <Signup />
        </div>
      } />
    </Routes>
  )
}

export default App
// STATE EFFECT -> QUA -> DUNG DU LIEU
// COMPONENNT -> PROP
// context 