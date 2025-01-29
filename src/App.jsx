import { useState } from "react";
import "./App.css";

import Home from "./pages/Home.jsx";
import Cart from "./assets/components/Cart.jsx";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
