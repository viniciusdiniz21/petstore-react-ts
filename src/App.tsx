import React from "react";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
