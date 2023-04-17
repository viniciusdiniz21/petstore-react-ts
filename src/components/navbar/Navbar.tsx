import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./navbar.scss";

const Navbar: React.FC = () => {
  const [open, setOpen] = React.useState<boolean>(false);

  const toggleMenu = () => {
    if (window.innerWidth < 769) {
      setOpen(!open);
    }
  };

  const menuStyle = open ? "menu open" : "menu";

  return (
    <div className="navbar">
      <div className="brand">Teste</div>
      <div className="hamburguer">
        <MenuIcon onClick={toggleMenu} />
      </div>
      <div className={menuStyle}>
        <ul>
          <CloseIcon className="close" onClick={toggleMenu} />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/add">New Product</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
