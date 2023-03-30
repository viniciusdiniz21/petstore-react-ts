import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.page";
import Products from "./pages/products/Products.page";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products">
            <Route index element={<Products />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
