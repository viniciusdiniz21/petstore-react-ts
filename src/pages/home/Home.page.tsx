import React from "react";
import "./home.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Wellcome</h1>
      <Button onClick={() => navigate("/")} variant="outlined">
        Products List
      </Button>
    </div>
  );
};

export default Home;
