import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Confessions from './pages/Confessions';
// import CreateConfession from './pages/CreateConfession';
import CreateConfession from "./pages/Create"
const App = () => {
  return (


    <Routes>
      <Route path="/" element={<Home />} exact />
      <Route path="/Confessions" element={<Confessions />} />
      <Route path="/create" element={<CreateConfession />} />
    </Routes>


  )
}

export default App