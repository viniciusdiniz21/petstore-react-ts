import React from "react";
import { TextField, Button, CircularProgress, Box } from "@mui/material";
import { IProduct } from "../../types/global.types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./add-products.scss";

const flex = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "2rem",
};

const btnSize = { width: "100%" };

const AddProducts: React.FC = () => {
  const [product, setProduct] = React.useState<Partial<IProduct>>({
    title: "",
    brand: "",
  });
  const [loading, setLoading] = React.useState<boolean>(false);

  var url: string = import.meta.env.VITE_URL;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleAdd = async () => {
    if (product.title == "" || product.brand == "")
      return Swal.fire("Error", "Fill all fields!", "error");
    setLoading(true);

    const data: Partial<IProduct> = {
      title: product.title,
      brand: product.brand,
    };

    try {
      const response = await axios.post<IProduct>(url, data).then((res) => {
        if (res.status == 200) {
          Swal.fire("Nice", "Product added successfully!", "success");
          navigate("../products");
        }
      });
    } catch (error) {
      Swal.fire("Error", "Try again later!", "error");
    } finally {
      setLoading(false);
      setProduct({ title: "", brand: "" });
    }
  };

  const handleBackButton = () => {
    navigate("/products");
  };

  return (
    <div className="add-products">
      <h1>AddProducts</h1>
      <Box sx={{ width: "75vw" }}>
        <div style={{ ...flex, flexDirection: "column" }}>
          <TextField
            autoComplete="off"
            label="Brand"
            name="brand"
            variant="outlined"
            fullWidth
            value={product.brand}
            onChange={handleChange}
          />
          <TextField
            autoComplete="off"
            label="Title"
            name="title"
            variant="outlined"
            fullWidth
            value={product.title}
            onChange={handleChange}
          />
        </div>
        <div style={{ ...flex, marginTop: "2rem" }}>
          <Button
            onClick={handleAdd}
            disabled={loading}
            variant="contained"
            color="success"
            sx={btnSize}
          >
            {loading ? <CircularProgress size={20} /> : "Save"}
          </Button>
          <Button
            onClick={handleBackButton}
            variant="contained"
            color="error"
            sx={btnSize}
          >
            Back
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default AddProducts;
