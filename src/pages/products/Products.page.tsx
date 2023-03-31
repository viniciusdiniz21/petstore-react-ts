import axios from "axios";
import React from "react";
import Swal from "sweetalert2";
import ProductCard from "../../components/product-card/ProductCard";
import { IProduct } from "../../types/global.types";
import { Grid } from "@mui/material";
import "./products.scss";

var url: string = import.meta.env.VITE_URL;

const Products: React.FC = () => {
  const [products, setProducts] = React.useState<IProduct[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get<IProduct[]>(url);
      setProducts(response.data);
    } catch (error) {
      Swal.fire("Error", "Can't get the product list...", "error");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products">
      <h1>Products</h1>
      <Grid container spacing={2}>
        {!loading ? (
          products.map((product: IProduct) => {
            return (
              <Grid item xs={12} sm={4} lg={3}>
                <ProductCard key={product.id} product={product} />
              </Grid>
            );
          })
        ) : (
          <Grid item xs={12}>
            <h1>Loading...</h1>
          </Grid>
        )}
      </Grid>
    </div>
  );
};

export default Products;
