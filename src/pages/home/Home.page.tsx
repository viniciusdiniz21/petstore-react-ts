import React from "react";
import "./home.scss";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <h1>Wellcome</h1>
      <Button
        sx={{ width: 150, height: 150 }}
        color="warning"
        onClick={() => navigate("/products")}
        variant="contained"
      >
        Products List
      </Button>
    </div>
  );
};

export default Home;
