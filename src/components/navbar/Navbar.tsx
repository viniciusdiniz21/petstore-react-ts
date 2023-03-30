import React from 'react'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.scss'

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
        <div className='brand'>Teste</div>
        <div className='hamburguer'><MenuIcon/></div>
        <div className='menu'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/products/add">New Product</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar