import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.modules.css";



const Navbar = () => {
  return (
    <div className={"navbar"}>
      
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/products">Products</Link>

   
   
    
    </div>
  )
}

export default Navbar