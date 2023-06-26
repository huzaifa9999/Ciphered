import React from 'react'
import { Route,Routes } from "react-router-dom";
import Home from "./pages/Home"
import Confessions from './pages/Confessions';
const App = () => {
  return (
    <>
  <Routes>
      <Route path="/" element={<Home/>} exact />
      <Route path="/Confessions" element={<Confessions/>} />
      </Routes>
    </>
  )
}

export default App