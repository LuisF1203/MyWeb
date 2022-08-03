import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  NotFound,
  // Portafolio,
  // Social,
  // Prices,
  // About
} from "./views";

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App
