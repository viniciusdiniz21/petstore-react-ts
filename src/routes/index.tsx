import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home.page";
import Products from "../pages/products/Products.page";
import AddProducts from "../pages/add-products/AddProducts.page";
import App from "../App";

export const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="add" element={<AddProducts />} />
        </Route>
      </Routes>
    </Router>
  );
};
