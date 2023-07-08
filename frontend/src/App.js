import React from 'react'
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Home from "./pages/Home"
import Confessions from './pages/Confessions';
// import CreateConfession from './pages/CreateConfession';
import CreateConfession from "./pages/Create"
import UpdateProfile from './pages/UpdateProfile';
// import { UserState } from './Context';
const App = () => {
  return (


    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/Confessions" element={<Confessions />} />
      <Route path="/create" element={<CreateConfession />} />
      <Route path="/MyProfile" element={<UpdateProfile />} />

    </Routes>


  )
}

export default App