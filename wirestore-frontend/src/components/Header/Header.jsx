import React from 'react';
import './Header.scss';

import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  return (
    <header className="header-component-container">
      <div className="header-component">
        <div className="header-options">
          <div className="language-container">
            <img src="assets\flags\english_flag.jpg" alt="flag-icon" />
            <p>ENGLISH</p>
          </div>
          <div className="currency-container">
            <p className="symbol">$</p>
            <p className="name">USD</p>
          </div>
        </div>
        <h1 className="header-title">WIRESTORE</h1>
        <div className="header-buttons">
          <div className="search-container">
            <SearchOutlinedIcon />
          </div>
          <div className="cart-container">
            <ShoppingCartOutlinedIcon />
            <span>2</span>
          </div>
          <div className="profile-container">
            <PersonIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
