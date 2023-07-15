import React from 'react'
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import Confessions from './pages/Confessions';
import CreateConfession from "./pages/Create"
import Profile from './pages/Profile';

const App = () => {
  return (


    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/Confessions" element={<Confessions />} />
      <Route path="/create" element={<CreateConfession />} />
      <Route path="/MyProfile" element={<Profile />} />
    </Routes>


  )
}

export default App