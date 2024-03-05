import { useContext, useState } from 'react'
import React from 'react'
import { LOG_URL } from '../utils/constants'
import { Link } from 'react-router-dom';
import userContext from '../utils/context/userContext';
import appStore from '../utils/redux/appStor';
import { useSelector } from 'react-redux';

const Header = () => {
  const { loggedIn } = useContext(userContext);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const cartItem = useSelector((store) => store.cart.item);
  return (
    <div className='header'>
      <div className="logo-container">
        <img className='logo'
          src={LOG_URL} />
      </div>
      <div className="nav_bar">
        <ul>
          {/* <h3>{loggedIn}</h3> */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about" >About Us</Link> </li>
          <li> <Link to="/contact" >Contact Us</Link> </li>
          <li> <Link to="/cart" >
             <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5M3.14 5l.5 2H5V5zM6 5v2h2V5zm3 0v2h2V5zm3 0v2h1.36l.5-2zm1.11 3H12v2h.61zM11 8H9v2h2zM8 8H6v2h2zM5 8H3.89l.5 2H5zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0m9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0" />
          </svg> {cartItem.length}</Link></li>
          {isLoggedIn ? (
            <li onClick={handleLogout}>Logout</li>
          ) : (
            <li onClick={handleLogin}>Login</li>
          )}


        </ul>
      </div>
    </div>
  )
}

export default Header